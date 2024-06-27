import { Router } from "express";
import { deleteRecipe, getRecipeByID, getRecipes, postRecipes, updateRecipe } from "../controllers/recipeControl.js";


//Create router
const recipeRouter = Router();

// define all routes
recipeRouter.get('/recipes', getRecipes)


//defining an endpoint to get a single recipe
recipeRouter.get('/recipes/:id', getRecipeByID);


recipeRouter.post('/recipes', postRecipes);


recipeRouter.patch('/recipes/:id', updateRecipe);


// deleting idem with id
recipeRouter.delete('/recipes/:id', deleteRecipe);
// export recipeRouter
export default recipeRouter;