import User from "../models/UserModel.js"
import { comparePassword, hashPassword } from "../ultils/hashPassword.js"
import { errorMessages, successMessages } from "../constants/message.js"
import { generateToken } from "../ultils/jwt.js"
class AuthController {
    async register(req, res, next) {
        try {
            const { email, password } = req.body
            const checkEmail = await User.findOne({
                email: email,
            })
            if (checkEmail) {
                return res.status(400).json({ messages: errorMessages.EMAIL_EXISTED})
            }
            const hashPass = await hashPassword(password)
            const user = await User.create({...req.body, password: hashPass })
            if (!user)
                return res.status(400).json({
                    messages: errorMessages.REGISTER_FAILED
                })
            user.password = undefined;
            return res.status(200).json({
                message: successMessages.REGISTER_SUCCESS,
                data: user
            })
        } catch (error) {
            next(error)
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({
                email: email,
            })
            if (!user) {
                return res.status(400).json({ messages: errorMessages.NOT_FOUND })
            }
   
            if (!(await comparePassword(password, user.password))) {
                return res.status(400).json({ message: errorMessages.INVALID_PASSWORD });
              }
            const token = generateToken({_id: user.id}, "10d")
            user.password = undefined;
            return res.status(200).json({
                messages: successMessages.LOGIN_SUCCESS,
                data: user,
                token
            })
        } catch (error) {
            next(error);
        }
    }
}


export default AuthController