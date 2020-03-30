import { Router } from "express";
import { check } from "express-validator";
import UserController from "../controllers/user.controller";

const controller = new UserController();

const router = Router();
      router.get('/users', controller.fetchAll);
      router.post(
          '/users',
          [
              check('email').trim().isEmail(),
              check('password').trim().isLength({min: 5})
          ],
          controller.addUser
      );

      export { router as userRouter }
