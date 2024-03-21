import { Request, Response } from "express";
import { CustomError } from "../domain";

export class hadleError {

    static catchedAsync = (fn:any) => {
        return (req:Request, res: Response) => {
            fn(req, res).catch((err:any) => {
                if(err instanceof CustomError) {
                    return res
                        .status(err?.statusCode ?? 400)
                        .json({ message: err?.message, route: err?.url });
                }
                return res.status(500).json({error: 'Internal Server Error'})
            });
        };
    };
}
