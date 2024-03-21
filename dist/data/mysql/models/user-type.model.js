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
exports.UserType = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("./user.model");
const user_roles_model_1 = require("./user-roles.model");
let UserType = class UserType extends sequelize_typescript_1.Model {
};
exports.UserType = UserType;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true
    }),
    __metadata("design:type", Number)
], UserType.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_roles_model_1.UserRoles),
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], UserType.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.Users),
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], UserType.prototype, "id_user", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        type: sequelize_typescript_1.DataType.BOOLEAN,
        defaultValue: false,
    }),
    __metadata("design:type", Boolean)
], UserType.prototype, "status_pas", void 0);
exports.UserType = UserType = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        createdAt: false,
        tableName: "type_user",
        modelName: "type_user"
    })
], UserType);
// export const UserType = sequelize.define("type_user" ,{
//     id: {
//         type: DataType.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     type: {
//         type: DataType.UUID,
//         allowNull:false
//     },
//     status_pas: {
//         type: DataType.BOOLEAN,
//         allowNull: false,
//         defaultValue:false
//     },
// },
// {
//     timestamps: false,
//     createdAt: false,
//     tableName: 'type_user'
// })
