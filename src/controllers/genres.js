import Genre from "../models/GenreModel.js"
class GenresController {
    getAll = async (req, res) => {
        try {
            const datas = await Genre.find();
            if (datas.length == 0) {
                return res.status(400).json(
                    {
                        message: "Lấy danh sách danh mục thất bại"
                    }
                )
            }
            return res.status(200).json(
                {
                    message: "Lấy danh sách danh mục thành công",
                    datas
                }
            )
        } catch (error) {
            return res.status(500).json(
                {
                    message: error.message
                }
            )
        }
    }
    getDetail = async (req, res) => {
        try {
            const data = await Genre.findById(req.params.id);
            if (!data) {
                return res.status(400).json(
                    {
                        message: "Lấy danh mục thất bại"
                    }
                )
            }
            return res.status(201).json(
                {
                    message: "Lấy  danh mục thành công",
                    data
                }
            )
        } catch (error) {
            return res.status(500).json(
                {
                    message: error.message
                }
            )
        }
    }
    create = async (req, res) => {
        try {
            const data = await Genre.create(req.body);
            if (!data) {
                return res.status(400).json(
                    {
                        message: "Thêm danh mục thất bại"
                    }
                )
            }
            return res.status(200).json(
                {
                    message: "Thêm danh mục thành công",
                    data
                }
            )
        } catch (error) {
            return res.status(500).json(
                {
                    message: error.message
                }
            )
        }
    }
    update = async (req, res) => {
        try {
            const data = await Genre.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!data) {
                return res.status(400).json(
                    {
                        message: "Cập nhật danh mục thất bại"
                    }
                )
            }
            return res.status(200).json(
                {
                    message: "Cập nhật danh mục thành công",
                    data
                }
            )
        } catch (error) {
            return res.status(500).json(
                {
                    message: error.message
                }
            )
        }
    }
    remove = async (req, res) => {
        try {
            const data = await Genre.findByIdAndDelete(req.params.id);
            if (!data) {
                return res.status(400).json(
                    {
                        message: "Xóa danh mục thất bại"
                    }
                )
            }
            return res.status(200).json(
                {
                    message: "Xóa danh mục thành công",
                    data
                }
            )
        } catch (error) {
            return res.status(500).json(
                {
                    message: error.message
                }
            )
        }
    }
}
export default GenresController