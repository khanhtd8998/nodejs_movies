import Joi from "joi";

const movieValidate = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    poster: Joi.string().min(3).max(255).required(),
    director: Joi.string().min(3).max(255).required(),
    cast: Joi.string().min(3).max(255).required(),
    genres: Joi.array().items(Joi.string().required()),
    category: Joi.string().required().required(),
    runningTime: Joi.number().required(),
    language: Joi.string().required(),
    rate: Joi.number().required(),
    trailer: Joi.string().required(),
    image: Joi.string().required(),



}).options({ abortEarly: false });

export default movieValidate