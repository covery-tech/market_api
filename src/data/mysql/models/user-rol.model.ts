import { Table, Model, DataType, Column } from "sequelize-typescript";




@Table({
    timestamps:false,
    createdAt:false,
    tableName:"user_roles",
    modelName:"user_roles"
})


export class UserRol extends Model {

    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        autoIncrement: true
    })
    declare id: number;

    
    @Column({
        allowNull: false,
        type: DataType.STRING(45),
    })
    declare description: string;


    @Column({
        allowNull: false,
        type: DataType.BOOLEAN,
        defaultValue:true
    })
    declare enabled: boolean
}






// export const UserRol = sequelize.define("user_roles" ,{
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


// UserRol.hasOne(UserType, {
//     foreignKey: 'type',
//     sourceKey: 'id'
// })

// UserType.belongsTo(UserRol, {
//     foreignKey: 'description',
//     targetKey: 'id'
// })

