import { Table, Model, DataType, Column, ForeignKey } from "sequelize-typescript";
import { User } from "./user.model";
import { UserRol } from "./user-rol.model";


@Table({
    timestamps:false,
    createdAt:false,
    tableName:"type_user",
    modelName:"type_user"
})


export class UserType extends Model {



    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        autoIncrement: true
    })
    declare id: number;



    @ForeignKey(()=> UserRol)
    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
    })
    declare type: number;



    @ForeignKey(() => User)
    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
    })
    declare id_user: number;



    @Column({
        allowNull: false,
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    declare status_pas: boolean

}



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
