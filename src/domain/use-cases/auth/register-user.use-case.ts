import { RegisterUserDto } from "../../dtos/auth/register-user.dto";
import { AuthRepository } from "../../repositories/auth.repository";


interface Response {
    data: boolean,
    status: number
}


interface IRegisterUserUseCase {
    execute(registerUserDto: RegisterUserDto): Promise<Response>
}



export class RegisterUserUseCase implements IRegisterUserUseCase {

    constructor(
        private readonly authRepository: AuthRepository
    ) {}

    async execute(registerUserDto: RegisterUserDto): Promise<Response> {
        
        const {data, status} = await this.authRepository.register(registerUserDto)
        return {
            data,
            status
        }
    }
    
}