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
exports.Users = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Users = class Users extends sequelize_typescript_1.Model {
};
exports.Users = Users;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true
    }),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        type: sequelize_typescript_1.DataType.BOOLEAN,
        defaultValue: true,
    }),
    __metadata("design:type", Boolean)
], Users.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Users.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Users.prototype, "refresh_token", void 0);
exports.Users = Users = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        createdAt: false,
        tableName: "users",
        modelName: "users"
    })
], Users);
// export const Users = sequelize.define("users",{
//     id: {
//         type: DataType.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     status: {
//         type: DataType.BOOLEAN,
//         allowNull: false,
//         defaultValue: true,
//     },
//     description: {
//         type: DataType.STRING,
//         allowNull: true
//     },
//     refresh_token: {
//         type: DataType.STRING(255),
//         allowNull: true,
//     }
// }, 
// {
//     timestamps: false,
//     createdAt: false
// }
// )
// userType
// Users.hasOne(UserType, {
//     foreignKey: 'id_user',
//     sourceKey: 'id'
// })
// UserType.belongsTo(Users, {
//     foreignKey: 'id_user',
//     targetKey: 'id'
// })
// userLocation
// Users.hasOne( UserLocation , {
//     foreignKey: 'users_id',
//     sourceKey: 'id'
// } )
// UserLocation.belongsTo(Users, {
//     foreignKey: 'users_id',
//     targetKey: 'id'
// })
// userData
// Users.hasOne( UserData , {
//     foreignKey: 'id_user',
//     sourceKey: 'id'
// } )
// UserData.belongsTo(Users, {
//     foreignKey: 'id_user',
//     targetKey: 'id'
// })
