import { Router } from "express";
import AuthController from "../controllers/auth.js";
const authController = new AuthController()
const authRouter = Router();
authRouter.post('/register', authController.register);

export default authRouter