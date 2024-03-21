import { Sequelize } from "sequelize-typescript";
import { envs } from "../../config";
import { CustomError } from "../../domain";
import { UserData, UserLocation, UserRol, UserType, User } from '../index'
import { Aliances } from "./models/aliance.model";


const sequelize = new Sequelize({
    database: envs.DB_DATABASE,
    username: envs.DB_USER,
    password: envs.DB_PASSWORD, 
    host: envs.DB_HOST,
    dialect: 'mysql',
    port: envs.DB_PORT,
    logging:false,
},
)

sequelize.addModels([User,UserData,UserLocation,UserRol,UserType, Aliances])


export class MysqlDatabase {
    static async connect() {
        try{
            await sequelize.authenticate()
            console.log('synchronizing database')
            await sequelize.sync({alter:true}).then(()=>{
                console.log('synchroniz database successfully')
            }).catch(()=>{
                console.log('synchroniz database unsuccessfully') 
            })
        } catch(error) {
            if(error instanceof CustomError) throw CustomError.internalServer("error conection database",error.message)
            throw error
        }
    }
}