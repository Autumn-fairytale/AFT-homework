import {Router} from "express";
import {check} from "express-validator";
import {authController} from "../controllers/authController.js";

export const authRouter = new Router()

authRouter.post('/registration', [
  check('userName', 'User name can not be empty').notEmpty(),
  check('password', 'Password should be 4-10 symbols').isLength({min: 4, max: 10}),
], authController.registration)
authRouter.post('/login', authController.login)