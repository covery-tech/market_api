
import { Table, Model, DataType, Column } from "sequelize-typescript";

@Table({
    timestamps:false,
    createdAt:false,
    tableName:"users",
    modelName:"users"
})

export class User extends Model {
    
    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        autoIncrement: true
    })
    declare id: number;


    @Column({
        allowNull: false,
        type: DataType.BOOLEAN,
        defaultValue: true,
    })
    declare status: boolean;


    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    declare description: string;

    @Column({
        allowNull: true,
        type: DataType.STRING,
    })
    declare refresh_token: string;
}





// export const User = sequelize.define("users",{
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
// User.hasOne(UserType, {
//     foreignKey: 'id_user',
//     sourceKey: 'id'
// })

// UserType.belongsTo(User, {
//     foreignKey: 'id_user',
//     targetKey: 'id'
// })

// userLocation

// User.hasOne( UserLocation , {
//     foreignKey: 'users_id',
//     sourceKey: 'id'
// } )

// UserLocation.belongsTo(User, {
//     foreignKey: 'users_id',
//     targetKey: 'id'
// })

// userData

// User.hasOne( UserData , {
//     foreignKey: 'id_user',
//     sourceKey: 'id'
// } )

// UserData.belongsTo(User, {
//     foreignKey: 'id_user',
//     targetKey: 'id'
// })
