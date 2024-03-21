import { Request } from "express";



export interface MyCustomRequest extends Request {
    user?: {
        email:string, 
        name:string, 
        id:string, 
        type:string,
        lastName:string
    };
}
