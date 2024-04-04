import { errorMessages, successMessages } from "../constants/message.js";
import Genre from "../models/GenreModel.js"
class GenresController {
    getAll = async (req, res, next) => {
        try {
            const datas = await Genre.find();
            if (datas.length == 0) {
                return res.status(400).json({
                    message: errorMessages.NOT_FOUND
                })
            }
            return res.status(200).json({
                message: successMessages.GET_DATA_SUCCESS,
                datas
            })
        } catch (error) {
            next(error)
        }
    }
    getDetail = async (req, res, next) => {
        try {
            const data = await Genre.findById(req.params.id);
            if (!data) {
                return res.status(400).json({
                    message: errorMessages.NOT_FOUND
                })
            }
            return res.status(201).json({
                message: successMessages.GET_DATA_SUCCESS,
                data
            })
        } catch (error) {
            next(error)
        }
    }
    create = async (req, res, next) => {
        try {
            const data = await Genre.create(req.body);
            if (!data) {
                return res.status(400).json({
                    message: errorMessages.CREATE_FAIL
                })
            }
            return res.status(200).json({
                message: successMessages.CREATE_DATA_SUCCESS,
                data
            })
        } catch (error) {
            next(error)
        }
    }
    update = async (req, res, next) => {
        try {
            const data = await Genre.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!data) {
                return res.status(400).json({
                    message: errorMessages.UPDATE_FAIL
                })
            }
            return res.status(200).json({
                message: successMessages.UPDATE_DATA_SUCCESS,
                data
            })
        } catch (error) {
            next(error)
        }
    }
    remove = async (req, res, next) => {
        try {
            const data = await Genre.findByIdAndDelete(req.params.id);
            if (!data) {
                return res.status(400).json({
                    message: errorMessages.DELETE_FAIL
                })
            }
            return res.status(200).json({
                message: successMessages.DELETE_DATA_SUCCESS,
                data
            })
        } catch (error) {
            next(error)
        }
    }
}
export default GenresController