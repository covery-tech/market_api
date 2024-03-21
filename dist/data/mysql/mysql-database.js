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
exports.MysqlDatabase = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = require("../../config");
const domain_1 = require("../../domain");
const index_1 = require("../index");
const aliances_model_1 = require("./models/aliances.model");
const sequelize = new sequelize_typescript_1.Sequelize({
    database: config_1.envs.DB_DATABASE,
    username: config_1.envs.DB_USER,
    password: config_1.envs.DB_PASSWORD,
    host: config_1.envs.DB_HOST,
    dialect: 'mysql',
    port: config_1.envs.DB_PORT,
    logging: false,
});
sequelize.addModels([index_1.Users, index_1.UserData, index_1.UserLocation, index_1.UserRoles, index_1.UserType, aliances_model_1.Aliances]);
class MysqlDatabase {
    static connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield sequelize.authenticate();
                console.log('synchronizing database');
                yield sequelize.sync({ alter: true }).then(() => {
                    console.log('synchroniz database successfully');
                }).catch(() => {
                    console.log('synchroniz database unsuccessfully');
                });
            }
            catch (error) {
                if (error instanceof domain_1.CustomError)
                    throw domain_1.CustomError.internalServer("error conection database", error.message);
                throw error;
            }
        });
    }
}
exports.MysqlDatabase = MysqlDatabase;
