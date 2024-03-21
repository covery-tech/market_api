"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hadleError = void 0;
const domain_1 = require("../domain");
class hadleError {
}
exports.hadleError = hadleError;
hadleError.catchedAsync = (fn) => {
    return (req, res) => {
        fn(req, res).catch((err) => {
            var _a;
            if (err instanceof domain_1.CustomError) {
                return res
                    .status((_a = err === null || err === void 0 ? void 0 : err.statusCode) !== null && _a !== void 0 ? _a : 400)
                    .json({ message: err === null || err === void 0 ? void 0 : err.message, route: err === null || err === void 0 ? void 0 : err.url });
            }
            return res.status(500).json({ error: 'Internal Server Error' });
        });
    };
};
