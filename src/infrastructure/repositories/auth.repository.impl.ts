import { AuthDatasource, AuthRepository, LoginUserDto, RegisterUserDto, Response, UserEntity } from "../../domain";

export class AuthResitoryImpl implements AuthRepository {

    constructor(
        private readonly datasource: AuthDatasource,
    ) {}

    
    register(registerUserDto: RegisterUserDto): Promise<Response> {
        return this.datasource.register(registerUserDto);
    }


    login(loginUserDto: LoginUserDto): Promise<UserEntity> {
        return this.datasource.login(loginUserDto);
    }
    
}