"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
require("dotenv/config");
const env_var_1 = require("env-var");
exports.envs = {
    PORT: (0, env_var_1.get)('PORT').required().asPortNumber(),
    JWT_SEED: (0, env_var_1.get)('SECRETTOKEN').required().asString(),
    DB_HOST: (0, env_var_1.get)('DB_HOST').required().asString(),
    DB_USER: (0, env_var_1.get)('DB_USER').required().asString(),
    DB_PASSWORD: (0, env_var_1.get)('DB_PASSWORD').required().asString(),
    DB_DATABASE: (0, env_var_1.get)('DB_DATABASE').required().asString(),
    DB_PORT: (0, env_var_1.get)('DB_PORT').required().asPortNumber(),
};
