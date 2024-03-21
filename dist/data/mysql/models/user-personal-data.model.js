"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserData = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("./user.model");
let UserData = class UserData extends sequelize_typescript_1.Model {
};
exports.UserData = UserData;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true
    }),
    __metadata("design:type", Number)
], UserData.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING(255),
    }),
    __metadata("design:type", String)
], UserData.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING(255),
    }),
    __metadata("design:type", String)
], UserData.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING(255),
    }),
    __metadata("design:type", String)
], UserData.prototype, "last_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(255),
    }),
    __metadata("design:type", String)
], UserData.prototype, "date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING(255),
    }),
    __metadata("design:type", String)
], UserData.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(45),
    }),
    __metadata("design:type", String)
], UserData.prototype, "phone_number", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.Users),
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Boolean)
], UserData.prototype, "id_user", void 0);
exports.UserData = UserData = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        createdAt: false,
        tableName: "personal_data",
        modelName: "personal_data"
    })
], UserData);
// export const UserData = sequelize.define("personal_data",{
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     name: {
//         type: DataTypes.STRING(255),
//         allowNull: false
//     },
//     last_name: {
//         type: DataTypes.STRING(255),
//         allowNull: false
//     },
//     date: {
//         type: DataTypes.STRING(255),
//         allowNull: true,
//     },
//     password: {
//         type: DataTypes.STRING(255),
//         allowNull: true,
//     },
//     phone_number: {
//         type: DataTypes.STRING(45),
//         allowNull: true,
//     },
// },
// {
//     timestamps: false,
//     createdAt: false,
//     tableName: 'personal_data'
// })
