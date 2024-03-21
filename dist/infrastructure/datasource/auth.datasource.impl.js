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
exports.AuthDatasourceImpl = void 0;
const config_1 = require("../../config");
const data_1 = require("../../data");
const domain_1 = require("../../domain");
const user_mapper_1 = require("../mappers/user.mapper");
class AuthDatasourceImpl {
    constructor(hashPassword = config_1.Bcrypt.hash, comparePassword = config_1.Bcrypt.compare) {
        this.hashPassword = hashPassword;
        this.comparePassword = comparePassword;
    }
    register(registerUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, lastName, name, password, date } = registerUserDto;
            try {
                // verificar si existe el correo
                const exists = yield data_1.UserData.findOne({ where: { email } });
                if (exists)
                    throw domain_1.CustomError.badRequest('Incorrect credentials', '/user/register');
                const { dataValues } = yield data_1.Users.create({
                    status: true,
                    description: null,
                    refresh_token: null
                });
                yield data_1.UserType.create({
                    id_user: dataValues.id,
                    type: 'client'
                });
                yield data_1.UserData.create({
                    name: name,
                    last_name: lastName,
                    date: date,
                    password: this.hashPassword(password),
                    email: email,
                    id_user: dataValues.id
                });
                yield data_1.UserLocation.create({
                    users_id: dataValues.id
                });
                return { data: true, status: 200 };
            }
            catch (error) {
                if (error instanceof domain_1.CustomError) {
                    throw error;
                }
                throw domain_1.CustomError.internalServer('/user/register');
            }
        });
    }
    login(loginUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = loginUserDto;
            try {
                const exists = yield data_1.UserData.findOne({ where: { email } });
                if (!exists)
                    throw domain_1.CustomError.badRequest('email or password is incorrect', '/user/login');
                const passwordCorrect = this.comparePassword(password, exists.dataValues.password);
                if (!passwordCorrect)
                    throw domain_1.CustomError.badRequest('email or password is incorrect', '/user/login');
                const userType = yield data_1.UserType.findOne({ where: { id_user: exists.dataValues.id } });
                const userMapper = {
                    id: exists.dataValues.id,
                    name: exists.dataValues.name,
                    email,
                    type: userType === null || userType === void 0 ? void 0 : userType.dataValues.type,
                    lastName: exists.dataValues.last_name,
                    phoneNumber: exists.dataValues.phone_number,
                };
                return user_mapper_1.UserMapper.userEntityFromObjectLogin(userMapper);
            }
            catch (error) {
                if (error instanceof domain_1.CustomError) {
                    throw error;
                }
                throw domain_1.CustomError.internalServer('/user/login');
            }
        });
    }
}
exports.AuthDatasourceImpl = AuthDatasourceImpl;
