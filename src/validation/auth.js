import Joi from "joi";

const registerValidate = Joi.object({
    username: Joi.string().min(3).max(255).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    avatar: Joi.string(),
    role: Joi.string().default("member")
}).options({ abortEarly: false });

const loginValidate = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
}).options({ abortEarly: false });

export { registerValidate, loginValidate}