import Joi from "joi";

const categorySchema = Joi.object({
    name: Joi.string().min(3).max(255).required().empty(),
    description: Joi.string().min(3).max(255).required().empty(),
}).options({ abortEarly: false });

export default categorySchema