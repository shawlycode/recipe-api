import { categoryModel } from "../models/category.js";

export const getCategories = async (req, res, next) => {

  try {
    // get all categories from db
    const allCategories = await categoryModel.find()
    //Return response
    res.status(200).json(allCategories)
  } catch (error) {
    next(error)
  }
}

//post a category

export const postCategory = async (req, res, next) => {
  try {
    //add category to db
    const newCategory = await categoryModel.create(req.body);
    res.status(201).json(newCategory);

  } catch (error) {
    next(error)
  }
}
//delete category

export const deleteCategory = async (req, res, next) => {
  try {
    //delete category by Id
  } catch (error) {
    next(error)
  }
}