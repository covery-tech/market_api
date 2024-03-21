"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserDto = void 0;
const config_1 = require("../../../config");
class RegisterUserDto {
    constructor(email, password, lastName, name, date) {
        this.email = email;
        this.password = password;
        this.lastName = lastName;
        this.name = name;
        this.date = date;
    }
    static create(object) {
        const { email, name, password, lastName, date } = object;
        if (!name)
            return ['Missing name'];
        if (!lastName)
            return ['Missing name'];
        if (!email)
            return ['Missing email'];
        if (!config_1.Validators.email.test(email))
            return ['Incorrect email'];
        if (!config_1.Validators.password.test(password))
            return ['Incorrect password'];
        return [
            undefined,
            new RegisterUserDto(email, password, lastName, name, date)
        ];
    }
}
exports.RegisterUserDto = RegisterUserDto;
