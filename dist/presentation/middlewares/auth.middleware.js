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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const config_1 = require("../../config");
const data_1 = require("../../data");
class AuthMiddleware {
}
exports.AuthMiddleware = AuthMiddleware;
_a = AuthMiddleware;
AuthMiddleware.validateJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header('token');
    if (!token)
        return res.status(401).json({ error: 'Access denied' });
    const payload = yield config_1.Jwt.validateToken(token);
    if (!payload)
        return res.status(401).json({ error: 'Access denied' });
    const user = yield data_1.Users.findOne({ where: { id: payload.user.id } });
    if (!user || !(user === null || user === void 0 ? void 0 : user.dataValues.status))
        return res.status(500).json({ error: 'Access denied' });
    req.user = { email: payload.user.email, name: payload.user.name, id: payload.user.id, type: payload.user.type, lastName: payload.user.lastName };
    next();
});
