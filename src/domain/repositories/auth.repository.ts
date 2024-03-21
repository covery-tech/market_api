import { LoginUserDto } from "../dtos/auth/login-user.dto";
import { RegisterUserDto } from "../dtos/auth/register-user.dto";
import { UserEntity } from "../entities/user.entity";
import { Response } from "../interface/respose.interface";


export abstract class AuthRepository {



    abstract register( registerUserDto : RegisterUserDto): Promise<Response>


    
    abstract login( loginUserDto : LoginUserDto): Promise<UserEntity>
}