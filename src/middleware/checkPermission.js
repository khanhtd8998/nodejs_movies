import User from "../models/UserModel.js";
import  Jwt  from "jsonwebtoken";
import dotenv from "dotenv"
const checkPermission = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if(!token) return res.status(401).json({message: "Not authorized"});
        const data = Jwt.decode(token,"key")
        const user = await User.findById(data.id)
        if(!user) return res.status(404).json({message: "Not found"});
        next()
    } catch (error) {
        return res.json(500).json({ error: error.message });
    }
}
export default checkPermission