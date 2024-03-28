import express from 'express';
import GenresController from '../controllers/genres.js';
const genreRouter = express.Router();
const genresController = new GenresController();

genreRouter.get("/", genresController.getAll)
genreRouter.get("/:id", genresController.getDetail)
genreRouter.post("/", genresController.create)
genreRouter.put("/:id", genresController.update)
genreRouter.delete("/:id", genresController.remove)
export default genreRouter