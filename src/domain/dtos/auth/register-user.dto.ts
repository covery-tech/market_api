import { Validators } from "../../../config";


export class RegisterUserDto {
    private constructor(
        public email: string,
        public password:string,
        public lastName:string,
        public name:string,
        public date:string,
    ){}

    static create(object: {[key: string]:any}): [string?, RegisterUserDto?] {
        const { email, name, password, lastName, date } = object;
        if( !name ) return ['Missing name']
        if( !lastName ) return ['Missing name']
        if( !email ) return ['Missing email']
        if( !Validators.email.test( email ) ) return ['Incorrect email']
        if( !Validators.password.test(password) ) return ['Incorrect password']
        return [
            undefined,
            new RegisterUserDto(
                email,
                password,
                lastName,
                name,
                date
            )
        ]
    }
}