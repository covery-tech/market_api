import { Validators } from "../../../config";


export class LoginUserDto {
    private constructor(
        public email: string,
        public password:string,
    ){}

    static create(object: {[key: string]:any}): [string?, LoginUserDto?] {
        const { email, password } = object;
        if( !email ) return ['Missing name']
        if( !password ) return ['Missing password']
        if( !Validators.password.test(password) ) return ['Incorrect format password']
        if( !Validators.email.test(email) ) return ['Incorrect format email']
        return [
            undefined,
            new LoginUserDto(
                email,
                password
            )
        ]
    }
}