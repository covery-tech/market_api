"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const infrastructure_1 = require("../../infrastructure");
const config_1 = require("../../config");
const auth_middleware_1 = require("../middlewares/auth.middleware");
class AuthRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const authRepository = new infrastructure_1.AuthResitoryImpl(new infrastructure_1.AuthDatasourceImpl());
        const contoller = new controller_1.AuthController(authRepository);
        router
            .post('/login', config_1.hadleError.catchedAsync(contoller.loginUser))
            .post('/register', config_1.hadleError.catchedAsync(contoller.registerUser))
            .get('/', auth_middleware_1.AuthMiddleware.validateJWT, contoller.getUsers);
        return router;
    }
}
exports.AuthRoutes = AuthRoutes;
