import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import User from "../models/user.model";

export default class UserController {

    fetchAll(req: Request, res: Response) {
        User.findAll()
            .then(users => {
                res.status(200).send(users);
            })
            .catch(err => {
                console.log(err);
            });
    }

    addUser(req: Request, res: Response) {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(401).json({
                message: 'Validation failed, entered data is incorrect!',
                errors: errors.array()
            });
        }
        User.create({
            first_name: req.body.first_name,
            last_name:  req.body.last_name,
            email:      req.body.email,
            password:   req.body.password
        })
            .then(() => {
                res.status(201).send('USER ADDED SUCCESSFULLY');
            })
            .catch(err => {
               console.log(err);
            });
    }
}
