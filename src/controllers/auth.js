import User from "../models/UserModel.js"
import bcryptjs from "bcryptjs"
import {registerValidate, loginValidate} from "../validation/auth.js"
import  Jwt  from "jsonwebtoken"
class AuthController {
    async register(req, res) {
        try {
            const { email, password } = req.body
            const { error } = registerValidate.validate(req.body);
            if (error) {
                const errors = error.details.map(err => err.message);
                return res.status(404).json({ messages: errors });
            }
            const checkEmail = await User.findOne({
                email: email,
            })
            if (checkEmail) {
                return res.status(400).json({ messages: "Email đã tồn tại" })
            }
            const salt = await bcryptjs.genSalt(10);
            const hashPassword = await bcryptjs.hash(password, salt);
            const user = await User.create({...req.body, password: hashPassword })
            if (!user)
                return res.status(400).json({
                    messages: "Tạo tài khoản thất bại"
                })
            user.password = undefined;
            return res.status(200).json({
                messages: "Success",
                data: user
            })
        } catch (error) {
            return res.status(500).json({
                message: error.message
            })
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body
            const { error } = loginValidate.validate(req.body);
            if (error) {
                const errors = error.details.map(err => err.message);
                return res.status(404).json({ messages: errors });
            }
            const user = await User.findOne({
                email: email,
            })
            if (!user) {
                return res.status(400).json({ messages: "Tài khoản không tồn tại" })
            }
   
            const checkPassword = bcryptjs.compare(password, user.password)
            if(!checkPassword) return res.status(400).json({ messages: "Mật khẩu không đúng" })
            const token = Jwt.sign({id: user._id}, 'key', {expiresIn: "60"})
            user.password = undefined;
            return res.status(200).json({
                messages: "Success",
                data: user,
                token
            })
        } catch (error) {
            return res.status(500).json({
                message: error.message
            })
        }
    }
}


export default AuthController