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
exports.LoginUserUseCase = void 0;
const config_1 = require("../../../config");
const custom_error_1 = require("../../errors/custom.error");
class LoginUserUseCase {
    constructor(authRepository, singToken = config_1.Jwt.generateToken) {
        this.authRepository = authRepository;
        this.singToken = singToken;
    }
    execute(loginUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.authRepository.login(loginUserDto);
            const token = yield this.singToken({ user });
            if (!token)
                throw custom_error_1.CustomError.internalServer('/user/login');
            return {
                token: token,
                user: {
                    id: user.id,
                    name: user.name,
                    lastName: user.lastName,
                    email: user.email,
                    phoneNumber: user.phoneNumber
                }
            };
        });
    }
}
exports.LoginUserUseCase = LoginUserUseCase;
