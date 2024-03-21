import { Table, Model, DataType, Column, ForeignKey } from "sequelize-typescript";
import  { User }  from "./user.model";



@Table({
    timestamps:false,
    createdAt:false,
    tableName:"location",
    modelName:"location"
})


export class UserLocation extends Model {

    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        autoIncrement: true
    })
    declare id: number;

    
    @Column({
        type: DataType.STRING(255),
        allowNull: true,
    })
    declare city: string;


    @Column({
        type: DataType.STRING(255),
        allowNull: true,
    })
    declare coords: string;


    @Column({
        type: DataType.STRING(255),
        allowNull: true,
    })
    declare street_name: string;


    @Column({
        type: DataType.STRING(255),
        allowNull: true,
    })
    declare province: string;


    @ForeignKey(()=> User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    declare users_id: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: true,
    })
    declare postal_code: string;
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

