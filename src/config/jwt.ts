import jwt from 'jsonwebtoken'
import { envs } from './envs'

export class Jwt {
    static async generateToken( payload: Object, duration:string = '1d'): Promise<string|null> {
        return new Promise( (resolve) => {
            jwt.sign(
                payload, 
                envs.JWT_SEED,
                { expiresIn: duration },
                (err, token) => {
                    if( err ) return resolve(null)
                    resolve(token!)
                }
            )
        })
    }

    static validateToken<T>( token: string ): Promise<T | null> {
        return new Promise ( (resolve) => {
            jwt.verify(
                token,
                envs.JWT_SEED,
                (err, decode) => {
                    if( err ) return resolve(null)
                    resolve(decode as T)
                }
            )
        })
    }

}