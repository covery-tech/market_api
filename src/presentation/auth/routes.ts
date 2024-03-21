import { Router } from "express";
import { AuthController } from "./controller";
import { AuthDatasourceImpl, AuthResitoryImpl } from "../../infrastructure";
import { hadleError } from "../../config";
import { AuthMiddleware } from "../middlewares/auth.middleware";


export class AuthRoutes {
    static get routes(): Router {
        const router = Router();
        const authRepository = new AuthResitoryImpl(new AuthDatasourceImpl())
        const contoller = new AuthController(authRepository);
        
        router
        .post('/login', hadleError.catchedAsync(contoller.loginUser))
        .post('/register', hadleError.catchedAsync(contoller.registerUser))
        .get('/', AuthMiddleware.validateJWT  ,contoller.getUsers)


        return router;
    }
}