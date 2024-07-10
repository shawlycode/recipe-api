import { Router } from "express";
import { deleteRecipe, getRecipeByID, getRecipes, postRecipes, updateRecipe } from "../controllers/recipeControl.js";
import { remoteUploads } from "../middlewares/uploads.js";
import { checkUserSession } from "../middlewares/auth.js";

//Create router
const recipeRouter = Router();
//apply middlewares
recipeRouter.use(checkUserSession)


// define all routes
recipeRouter.get('/recipes', getRecipes)
recipeRouter.get('/recipes/:id', getRecipeByID);
recipeRouter.post('/recipes', remoteUploads.single('image'), checkUserSession, postRecipes);
recipeRouter.patch('/recipes/:id', checkUserSession, updateRecipe);

// deleting idem with id
recipeRouter.delete('/recipes/:id', checkUserSession, deleteRecipe);

// export recipeRouter
export default recipeRouter;