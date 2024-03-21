import { Table, Model, DataType, Column, ForeignKey } from "sequelize-typescript";
import  { User }  from "./user.model";



@Table({
    timestamps:true,
    createdAt:true,
    tableName:"aliances",
    modelName:"aliances"
})

class Base extends Model  {
    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        autoIncrement: true
    })
    declare id: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    declare enable: boolean;
}


export class Aliances extends Base {
    
    @Column({
        type: DataType.STRING(255),
        allowNull: true,
    })
    declare name: string;
}




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

