import Router from 'express';
import {authMiddleware} from "../middlewares/authMiddleware.js";
import {userController} from "../controllers/userController.js";
export const userRouter = new Router()

userRouter.get('/',  authMiddleware(['USER', 'ADMIN']),  userController.getAllUsers)
userRouter.delete('/', authMiddleware(['ADMIN']), userController.deleteUser)
