import { Router } from "express";
import AuthController from "../controllers/auth.js";
import validBodyRequest from "../middleware/validRequest.js";
import { loginValidate, registerValidate } from "../validation/auth.js";
const authController = new AuthController()
const authRouter = Router();
authRouter.post('/register', validBodyRequest(registerValidate), authController.register);
authRouter.post('/login', validBodyRequest(loginValidate) ,authController.login);

export default authRouter