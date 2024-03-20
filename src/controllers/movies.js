import Movie from "../models/MovieModel.js";
class MoviesController {
    async getAll(req, res) {
        try {
            const movies = await Movie.find().populate(["category", "genres"]);
            if (movies.length == 0) {
                return res.status(404).json({
                    message: "Khong tim thay danh sach phim"
                });
            }
            return res.status(200).json({
                message: "Lay danh sach phim thanh cong",
                data: movies
            })
        } catch (error) {
            return res.status(404).json({
                message: 'error',
            })
        }
    }

    async getDetail(req, res) {
        try {
            const movie = await Movie.findById(req.params.id).populate(["category", "genres"]);
            if (!movie) {
                return res.status(404).json({
                    message: "Lay phim that bai",
                });
            }
            return res.status(200).json({
                message: "Lay phim thanh cong",
                data: movie

            })
        } catch (error) {
            return res.status(404).json({
                message: 'error',
            })
        }
    }

    async create(req, res) {
        try {
            const movie = await Movie.create(req.body);
            if (!movie) {
                return res.status(404).json({
                    message: "Tao phim that bai"
                });
            }
            return res.status(201).json({
                message: "Tao phim thanh cong",
                data: movie
            })
        } catch (error) {
            return res.status(404).json({
                menubar: 'error',
            })
        }
    }

    async update(req, res) {
        try {
            const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            });
            if (!movie) {
                return res.status(404).json({
                    message: "Cap nhat phim that bai",
                });
            }
            return res.status(200).json({
                message: "Cap nhat phim thanh cong",
                data: movie

            })
        } catch (error) {
            return res.status(404).json({
                message: 'error',
            })
        }
    }

    async remove(req, res) {
        try {
            const movie = await Movie.findByIdAndDelete(req.params.id);
            if (!movie) {
                return res.status(404).json({
                    message: "Xoa phim that bai",
                });
            }
            return res.status(200).json({
                message: "Xoa phim thanh cong",
                data: movie

            })
        } catch (error) {
            return res.status(404).json({
                message: 'error',
            })
        }
    }
}
export default MoviesController;