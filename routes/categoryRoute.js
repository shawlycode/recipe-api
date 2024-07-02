import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category.js";
import multer from "multer";



//create upload middleware(avoid app.use)
const upload = multer({ dest: 'uploads/' })
//create router
const categoryRouter = Router();

//define routes
// categoryRouter.get('/recipes', getCategories);
categoryRouter.get('/categories', getCategories);

//applying multer where you want to do the upload
categoryRouter.post('/categories', upload.single('image'), postCategory);
//export router

export default categoryRouter;