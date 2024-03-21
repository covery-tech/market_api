import { Bcrypt } from "../../config";
import { UserData, UserLocation, UserType, User } from "../../data";
import { AuthDatasource, CustomError, LoginUserDto, RegisterUserDto, Response, UserEntity } from "../../domain";
import { UserMapper } from "../mappers/user.mapper";

type HashFunction = (password: string) => string
type CompareFunction = (password: string, hashed: string) => boolean


export class AuthDatasourceImpl implements AuthDatasource {
    
    constructor(
        private readonly hashPassword: HashFunction = Bcrypt.hash,
        private readonly comparePassword: CompareFunction = Bcrypt.compare,
    ) {}
    
    
    async register(registerUserDto: RegisterUserDto): Promise<Response> {
        const { email, lastName, name, password, date } = registerUserDto;
        try {
        // verificar si existe el correo
            const exists = await UserData.findOne({where: {email}})
            if ( exists ) throw CustomError.badRequest('Incorrect credentials', '/user/register')

            const {dataValues} = await User.create({
                status: true,
                description: null,
                refresh_token: null
            })

            await UserType.create({
                id_user: dataValues.id,
                type: 'client'
            })

            await UserData.create({
                name: name,
                last_name: lastName,
                date: date,
                password: this.hashPassword(password),
                email: email,
                id_user:dataValues.id
            })

            await UserLocation.create({
                users_id: dataValues.id
            })

            return {data:true, status:200}
        } catch (error) {
            if( error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer('/user/register');
        }
    }
    
    
    async login(loginUserDto: LoginUserDto): Promise<UserEntity> {
        const { email, password } = loginUserDto;
        try {
            const exists = await UserData.findOne({where: {email}})

            if ( !exists ) throw CustomError.badRequest('email or password is incorrect', '/user/login')
            
            const passwordCorrect = this.comparePassword(password,exists.dataValues.password)
            if ( !passwordCorrect ) throw CustomError.badRequest('email or password is incorrect', '/user/login')
            
            const userType = await UserType.findOne({where:{id_user:exists.dataValues.id}})

            const userMapper = {
                id: exists.dataValues.id,
                name:exists.dataValues.name,
                email,
                type:userType?.dataValues.type,
                lastName:exists.dataValues.last_name,
                phoneNumber:exists.dataValues.phone_number,
            }

            return UserMapper.userEntityFromObjectLogin(userMapper)
        } catch (error) {
            if( error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer('/user/login');
        }
    }
    
}