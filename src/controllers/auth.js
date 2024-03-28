import User from "../models/UserModel.js"
import bcryptjs from "bcryptjs"
import registerValidate from "../validation/auth.js"
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
}


export default AuthController