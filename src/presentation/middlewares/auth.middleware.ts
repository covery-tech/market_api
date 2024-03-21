import { NextFunction, Response } from "express";
import { Jwt } from "../../config";
import { MyCustomRequest } from "../../domain";
import { User } from "../../data";



  export class AuthMiddleware {
    static validateJWT = async (req: MyCustomRequest, res: Response, next: NextFunction) => {
      const token = req.header('token');
      if (!token) return res.status(401).json({ error: 'Access denied' });
      
      
      const payload = await Jwt.validateToken<{exp:Number, iat:Number , user: {email:string, name:string, id:string, type:string,lastName:string}}>(token);
      if (!payload) return res.status(401).json({ error: 'Access denied' });
  
      const user = await User.findOne({ where: { id: payload.user.id } });
      if (!user || !user?.dataValues.status) return res.status(500).json({ error: 'Access denied' });
  
      req.user = { email: payload.user.email, name: payload.user.name, id: payload.user.id, type: payload.user.type, lastName:payload.user.lastName };
  
      next();
    }
  }