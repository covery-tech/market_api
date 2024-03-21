"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
const domain_1 = require("../../domain");
class UserMapper {
    static userEntityFromObjectLogin(object) {
        const { id, name, lastName, email, type, phoneNumber = null } = object;
        if (!id)
            throw domain_1.CustomError.badRequest('Missing id', '/user/login');
        if (!name)
            throw domain_1.CustomError.badRequest('Missing name', '/user/login');
        if (!lastName)
            throw domain_1.CustomError.badRequest('Missing lastName', '/user/login');
        if (!type)
            throw domain_1.CustomError.badRequest('Missing type', '/user/login');
        if (!email)
            throw domain_1.CustomError.badRequest('Missing email', '/user/login');
        return new domain_1.UserEntity(id, email, name, lastName, phoneNumber, type);
    }
}
exports.UserMapper = UserMapper;
