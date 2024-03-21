import { Table, Model, DataType, Column, ForeignKey } from "sequelize-typescript";
import  { User }  from "./user.model";



@Table({
    timestamps:false,
    createdAt:false,
    tableName:"personal_data",
    modelName:"personal_data"
})


export class UserData extends Model {

    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        autoIncrement: true
    })
    declare id: number;

    
    @Column({
        allowNull: false,
        type: DataType.STRING(255),
    })
    declare email: string;


    @Column({
        allowNull: false,
        type: DataType.STRING(255),
    })
    declare name: string;


    @Column({
        allowNull: false,
        type: DataType.STRING(255),
    })
    declare last_name: string;


    @Column({
        allowNull: true,
        type: DataType.STRING(255),
    })
    declare date: string;


    @Column({
        allowNull: false,
        type: DataType.STRING(255),
    })
    declare password: string;



    @Column({
        allowNull: true,
        type: DataType.STRING(45),
    })
    declare phone_number: string


    @ForeignKey( ()=> User )
    @Column({
        allowNull: false,
        type: DataType.INTEGER,
    })
    declare id_user: boolean
}



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
