import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category.js";


//create router
const categoryRouter = Router();

//define routes
// categoryRouter.get('/recipes', getCategories);
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories', postCategory);
//export router

export default categoryRouter;