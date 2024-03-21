import { Jwt } from "../../../config";
import { LoginUserDto } from "../../dtos/auth/login-user.dto";
import { CustomError } from "../../errors/custom.error";
import { AuthRepository } from "../../repositories/auth.repository";

interface UserToken {
    token: string,
    user: {
        id:string,
        name:string,
        lastName: string,
        email:string,
        phoneNumber:string
    }
}

interface ILoginUserUseCase {
    execute(loginUserDto: LoginUserDto): Promise<UserToken>
}


type SingToken = (payload: Object, duration?: string) => Promise<string | null>


export class LoginUserUseCase implements ILoginUserUseCase {

    constructor(
        private readonly authRepository: AuthRepository,
        private readonly  singToken: SingToken = Jwt.generateToken,
        ) {}

    async execute(loginUserDto: LoginUserDto): Promise<UserToken> {
        const user = await this.authRepository.login(loginUserDto)

        const token = await this.singToken({user})
        if( !token ) throw CustomError.internalServer('/user/login')
        return {
            token: token,
            user : {
                id:user.id,
                name:user.name,
                lastName: user.lastName,
                email:user.email,
                phoneNumber:user.phoneNumber
            }
        }
    }

}