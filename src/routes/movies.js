import express from 'express';
import MoviesController from '../controllers/movies.js';
const moviesController = new MoviesController();
const movieRouter = express.Router();

movieRouter.get("/", moviesController.getAll)
movieRouter.get("/:id", moviesController.getDetail)
movieRouter.post("/", moviesController.create)
movieRouter.put("/:id", moviesController.update)
movieRouter.delete("/:id", moviesController.remove)
export default movieRouter
