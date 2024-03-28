import express from 'express';
import CategoriesController from '../controllers/categories.js';
import checkPermission from '../middleware/checkPermission.js';

const categoriesController = new CategoriesController();
const categoryRouter = express.Router();

categoryRouter.get("/", categoriesController.getAll)
categoryRouter.get("/:id", categoriesController.getDetail)
categoryRouter.post("/", checkPermission,  categoriesController.create)
categoryRouter.put("/:id", categoriesController.update)
categoryRouter.delete("/:id", categoriesController.remove)
export default categoryRouter