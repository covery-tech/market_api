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
exports.UserRoles = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let UserRoles = class UserRoles extends sequelize_typescript_1.Model {
};
exports.UserRoles = UserRoles;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true
    }),
    __metadata("design:type", Number)
], UserRoles.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING(45),
    }),
    __metadata("design:type", String)
], UserRoles.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        type: sequelize_typescript_1.DataType.BOOLEAN,
        defaultValue: true
    }),
    __metadata("design:type", Boolean)
], UserRoles.prototype, "enabled", void 0);
exports.UserRoles = UserRoles = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        createdAt: false,
        tableName: "user_roles",
        modelName: "user_roles"
    })
], UserRoles);
// export const UserRoles = sequelize.define("user_roles" ,{
//     id: {
//         type: DataTypes.UUIDV4,
//         primaryKey: true,
//         defaultValue: Sequelize.UUIDV4,
//     },
//     description: {
//         type: DataTypes.STRING(45),
//         allowNull: false,
//     },
//     enabled: {
//         type: DataTypes.BOOLEAN,
//         allowNull: false,
//         defaultValue:true
//     },
// },
// {
//     timestamps: false,
//     createdAt: false,
//     tableName: 'user_roles'
// })
// UserRoles.hasOne(UserType, {
//     foreignKey: 'type',
//     sourceKey: 'id'
// })
// UserType.belongsTo(UserRoles, {
//     foreignKey: 'description',
//     targetKey: 'id'
// })
