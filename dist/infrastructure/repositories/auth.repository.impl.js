"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResitoryImpl = void 0;
class AuthResitoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    register(registerUserDto) {
        return this.datasource.register(registerUserDto);
    }
    login(loginUserDto) {
        return this.datasource.login(loginUserDto);
    }
}
exports.AuthResitoryImpl = AuthResitoryImpl;
