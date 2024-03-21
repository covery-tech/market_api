import { Request, Response } from "express"

import { 
    AuthRepository, 
    CustomError, 
    LoginUserDto, 
    LoginUserUseCase, 
    MyCustomRequest, 
    RegisterUserDto, 
    RegisterUserUseCase 
} from "../../domain"
import { UserData } from "../../data/index";


export class AuthController {
    constructor(
        private readonly authRepository: AuthRepository,
    ) {}


    private handleError = (err: unknown, res:Response) => {
        if(err instanceof CustomError) {
            return res
                .status(err?.statusCode ?? 400)
                .json({ message: err?.message, route: err?.url });
        }
        return res.status(500).json({error: 'Internal Server Error'})
    }


    registerUser = async ( req: Request, res: Response ) => {
        const [error, registerDto] = RegisterUserDto.create(req.body)
        if ( error ) return res.status(400).json({error})

        new RegisterUserUseCase(this.authRepository)
            .execute( registerDto! )
            .then(resp=> res.json(resp))
            .catch( error => this.handleError(error,res))
    }

    loginUser = async ( req: Request, res: Response ) => {
        
        const [error, loginDto] = LoginUserDto.create(req.body)
        if ( error ) return res.status(400).json({error})

        new LoginUserUseCase(this.authRepository)
        .execute( loginDto! )
        .then(resp => res.header('token', resp.token).json(resp))
        .catch( error => this.handleError(error,res))

    }

    getUsers = async ( req: MyCustomRequest, res: Response ) => {
        UserData.findAll()
            .then(users=> res.json(users))
            .catch(()=> res.status(500).json({error: 'Internal Server Error'}))
    }
}