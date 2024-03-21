"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bcrypt = void 0;
const bcryptjs_1 = require("bcryptjs");
class Bcrypt {
    static hash(password) {
        return (0, bcryptjs_1.hashSync)(password);
    }
    static compare(password, hashed) {
        return (0, bcryptjs_1.compareSync)(password, hashed);
    }
}
exports.Bcrypt = Bcrypt;
