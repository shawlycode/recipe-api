import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";
//Create router

const recipeRouter = Router();

// define all routes
recipeRouter.get('/', (req, res) => {
  res.json('All recipes')
})
//defining an endpoint to get a single recipe
recipeRouter.get('/recipes/:id', (req, res) => {
  res.json(`Recipes with ID ${req.params.id} received`)
})
recipeRouter.post('/recipes', async (req, res) => {
  //allowing users to add items to body using req.body
  //add recipe to db using await
  await RecipeModel.create(req.body);
  //return response

  res.json('Recipe Added Successfully')
})
recipeRouter.patch('/recipes/:id', (req, res) => {
  // using the params to deleted an item with id

  res.json(`Recipe with ID ${req.params.id} updated`)
})
// deleting idem with id
recipeRouter.delete('/recipes/:id', (req, res) => {
  res.json(`Recipes with ID ${req.params.id} deleted successfully`)
})
// export recipeRouter
export default recipeRouter;