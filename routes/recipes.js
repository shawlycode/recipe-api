import { Router } from "express";
//Create router

const recipeRouter = Router();

// define all routes
recipeRouter.get('/recipes', (req, res) => {
  res.json('All recipes')
})

recipeRouter.post('/recipes', (req, res) => {
  res.json('Recipe Added ')
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