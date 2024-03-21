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
exports.UserLocation = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("./user.model");
let UserLocation = class UserLocation extends sequelize_typescript_1.Model {
};
exports.UserLocation = UserLocation;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true
    }),
    __metadata("design:type", Number)
], UserLocation.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: true,
    }),
    __metadata("design:type", String)
], UserLocation.prototype, "city", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: true,
    }),
    __metadata("design:type", String)
], UserLocation.prototype, "coords", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: true,
    }),
    __metadata("design:type", String)
], UserLocation.prototype, "street_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: true,
    }),
    __metadata("design:type", String)
], UserLocation.prototype, "province", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.Users),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", String)
], UserLocation.prototype, "users_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: true,
    }),
    __metadata("design:type", String)
], UserLocation.prototype, "postal_code", void 0);
exports.UserLocation = UserLocation = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        createdAt: false,
        tableName: "location",
        modelName: "location"
    })
], UserLocation);
// export const UserLocation = sequelize.define("location",{
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     city: {
//         type: DataTypes.STRING(255),
//         allowNull: true,
//     },
//     coords: {
//         type: DataTypes.STRING(255),
//         allowNull: true,
//     },
//     street_name: {
//         type: DataTypes.STRING(255),
//         allowNull: true,
//     },
//     province: {
//         type: DataTypes.STRING(255),
//         allowNull: true,
//     },
//     postal_code: {
//         type: DataTypes.STRING(255),
//         allowNull: true,
//     },
// },
// {
//     timestamps: false,
//     createdAt: false,
//     tableName: 'location'
// })
