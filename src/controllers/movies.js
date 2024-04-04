import { errorMessages, successMessages } from "../constants/message.js";
import Movie from "../models/MovieModel.js";
import movieValidate from "../validation/movies.js";
class MoviesController {
    async getAll(req, res, next) {
        try {
            const movies = await Movie.find().populate(["category", "genres"]);
            if (movies.length == 0) {
                return res.status(404).json({
                    message: errorMessages.NOT_FOUND
                });
            }
            return res.status(200).json({
                message: successMessages.GET_DATA_SUCCESS,
                data: movies
            })
        } catch (error) {
            next(error);
        }
    }

    async getDetail(req, res, next) {
        try {
            const movie = await Movie.findById(req.params.id).populate(["category", "genres"]);
            if (!movie) {
                return res.status(404).json({
                    message: errorMessages.NOT_FOUND,
                });
            }
            return res.status(200).json({
                message: successMessages.GET_DATA_SUCCESS,
                data: movie

            })
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            const { error } = movieValidate.validate(req.body)
            if(error) {
                const errors = error.details.map(err => err.message)
                return res.status(400).json({message: errors})
            }
            const movie = await Movie.create(req.body);
            if (!movie) {
                return res.status(404).json({
                    message: errorMessages.CREATE_FAIL
                });
            }
            return res.status(201).json({
                message: successMessages.CREATE_DATA_SUCCESS,
                data: movie
            })
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            
            const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            });
            if (!movie) {
                return res.status(404).json({
                    message: errorMessages.UPDATE_FAIL,
                });
            }
            return res.status(200).json({
                message: successMessages.UPDATE_DATA_SUCCESS,
                data: movie

            })
        } catch (error) {
            next(error)
        }
    }

    async remove(req, res, next) {
        try {
            const movie = await Movie.findByIdAndDelete(req.params.id);
            if (!movie) {
                return res.status(404).json({
                    message: errorMessages.DELETE_FAIL,
                });
            }
            return res.status(200).json({
                message: successMessages.DELETE_DATA_SUCCESS,
                data: movie

            })
        } catch (error) {
            next(error)
        }
    }
}
export default MoviesController;