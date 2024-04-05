import express from 'express';
import CategoriesController from '../controllers/categories.js';
import checkPermission from '../middleware/checkPermission.js';
import validBodyRequest from '../middleware/validRequest.js';
import categorySchema from '../validation/category.js';

const categoriesController = new CategoriesController();
const categoryRouter = express.Router();

categoryRouter.get("/", categoriesController.getAll)
categoryRouter.get("/:id", categoriesController.getDetail)

// categoryRouter.use(checkPermission)
categoryRouter.use(validBodyRequest(categorySchema))
categoryRouter.post("/",  categoriesController.create)
categoryRouter.put("/:id", categoriesController.update)
categoryRouter.delete("/:id", categoriesController.remove)
export default categoryRouter