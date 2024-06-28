import { RecipeModel } from "../models/recipe.js";
//Get all recipes
export const getRecipes = async (req, res, next) => {
  try {
    //allowing users to add items to body using req.body
    //add recipe to db using await
    const newRecipe = await RecipeModel.create(req.body);
    //return response

    res.json(newRecipe);
  } catch (error) {
    next(error);
  }
}
export const getRecipeByID = async (req, res, next) => {
  try {
    //allowing users to add items to body using req.body
    //add recipe to db using await
    const newRecipe = await RecipeModel.create(req.body);
    //return response

    res.json(newRecipe);
  } catch (error) {
    next(error);
  }
}


//Post recipe
export const postRecipes = async (req, res, next) => {
  try {
    //allowing users to add items to body using req.body
    //add recipe to db using await
    const newRecipe = await RecipeModel.create(req.body);
    //return response

    res.json(newRecipe);
  } catch (error) {
    next(error);
  }
}


//update /patch Recipe

export const updateRecipe = (req, res) => {
  // using the params to deleted an item with id

  res.json(`Recipe with ID ${req.params.id} updated`)
}

//delete recipe

export const deleteRecipe = async (req, res, next) => {
  try {
    //delete recipe by id
    const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
    //return response
    res.json(deletedRecipe)
  } catch (error) {
    next(error)
  }
}

//get a single recipe
export const deleteRecipeId = (req, res) => {
  res.json(`Recipes with ID ${req.params.id} received`)
}

//implement the patch of the favorite using the patch.
