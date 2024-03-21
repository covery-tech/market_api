"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserDto = void 0;
const config_1 = require("../../../config");
class LoginUserDto {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    static create(object) {
        const { email, password } = object;
        if (!email)
            return ['Missing name'];
        if (!password)
            return ['Missing password'];
        if (!config_1.Validators.password.test(password))
            return ['Incorrect format password'];
        if (!config_1.Validators.email.test(email))
            return ['Incorrect format email'];
        return [
            undefined,
            new LoginUserDto(email, password)
        ];
    }
}
exports.LoginUserDto = LoginUserDto;
