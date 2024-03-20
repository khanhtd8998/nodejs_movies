import express from 'express';
import CategoriesController from '../controllers/categories.js';
const categoriesController = new CategoriesController();
const categoryRouter = express.Router();

categoryRouter.get("/", categoriesController.getAll)
categoryRouter.get("/:id", categoriesController.getDetail)
categoryRouter.post("/", categoriesController.create)
categoryRouter.put("/:id", categoriesController.update)
categoryRouter.delete("/:id", categoriesController.remove)
export default categoryRouter
