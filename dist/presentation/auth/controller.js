"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const domain_1 = require("../../domain");
const index_1 = require("../../data/index");
class AuthController {
    constructor(authRepository) {
        this.authRepository = authRepository;
        this.handleError = (err, res) => {
            var _a;
            if (err instanceof domain_1.CustomError) {
                return res
                    .status((_a = err === null || err === void 0 ? void 0 : err.statusCode) !== null && _a !== void 0 ? _a : 400)
                    .json({ message: err === null || err === void 0 ? void 0 : err.message, route: err === null || err === void 0 ? void 0 : err.url });
            }
            return res.status(500).json({ error: 'Internal Server Error' });
        };
        this.registerUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, registerDto] = domain_1.RegisterUserDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            new domain_1.RegisterUserUseCase(this.authRepository)
                .execute(registerDto)
                .then(resp => res.json(resp))
                .catch(error => this.handleError(error, res));
        });
        this.loginUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, loginDto] = domain_1.LoginUserDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            new domain_1.LoginUserUseCase(this.authRepository)
                .execute(loginDto)
                .then(resp => res.header('token', resp.token).json(resp))
                .catch(error => this.handleError(error, res));
        });
        this.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            index_1.UserData.findAll()
                .then(users => res.json(users))
                .catch(() => res.status(500).json({ error: 'Internal Server Error' }));
        });
    }
}
exports.AuthController = AuthController;
