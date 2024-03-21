"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(statusCode, message, url) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.url = url;
    }
    static badRequest(message, url) {
        return new CustomError(400, message, url);
    }
    static unauthorized(message, url) {
        return new CustomError(401, message, url);
    }
    static forbidden(message, url) {
        return new CustomError(403, message, url);
    }
    static notFound(message, url) {
        return new CustomError(404, message, url);
    }
    static internalServer(url, message = 'Internal Server Error') {
        return new CustomError(500, message, url);
    }
}
exports.CustomError = CustomError;
