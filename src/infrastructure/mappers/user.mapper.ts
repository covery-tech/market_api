import { CustomError, UserEntity } from "../../domain";


export class UserMapper {
    static userEntityFromObjectLogin(object: {[key:string]:any}) {
        const { id, name, lastName, email, type, phoneNumber = null } = object
        if( !id ) throw CustomError.badRequest('Missing id', '/user/login')
        if( !name ) throw CustomError.badRequest('Missing name', '/user/login')
        if( !lastName ) throw CustomError.badRequest('Missing lastName', '/user/login')
        if( !type ) throw CustomError.badRequest('Missing type', '/user/login')
        if( !email ) throw CustomError.badRequest('Missing email', '/user/login')

        return new UserEntity(
            id,
            email,
            name,
            lastName,
            phoneNumber,
            type
        )
    }
}