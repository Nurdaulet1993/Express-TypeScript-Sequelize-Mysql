import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import User from "../models/user.model";

export default class AuthController {
    signUp(req: Request, res: Response) {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(401).json({
                message: 'Validation failed, entered data is incorrect!',
                errors: errors.array()
            });
        }

        const first_name =  req.body.first_name;
        const last_name =   req.body.last_name;
        const email =       req.body.email;
        const password =    req.body.password;
    }
}
