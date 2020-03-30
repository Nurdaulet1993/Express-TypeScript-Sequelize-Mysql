import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import { check } from "express-validator";

const controller = new AuthController();

const router = Router();
      router.post('/signup', [
            check('first_name')
                .trim()
                .isEmpty(),
            check('last_name')
                .trim()
                .isEmpty(),
            check('email')
                .trim().isEmail()
                .withMessage('Please enter a valid email')  // There after should be custom validation check email existing
                .normalizeEmail(),
            check('password')
                .trim()
                .isLength({min: 5})
                .withMessage('The length of password should be minimum 5 words')
      ], controller.signUp);


      export { router as authRouter }
