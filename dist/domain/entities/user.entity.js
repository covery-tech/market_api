"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
class UserEntity {
    constructor(id, email, name, lastName, phoneNumber, type, img) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.type = type;
        this.img = img;
    }
}
exports.UserEntity = UserEntity;
