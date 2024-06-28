import { Schema, model, Types } from "mongoose";
import normalize from "normalize-mongoose"


const recipeSchema = new Schema({
  name: { type: String, unique: true, required: true },
  //Types help to link the category by referencing with the ID
  categoryId: { type: Types.ObjectId, ref: 'Category', required: true },
  description: { type: String, required: true },
  ingredients: [{ type: String, require: true }],
  image: { type: String, required: true },
  favorite: { type: Boolean, default: false }


}, {
  //timestamps automatically create the createdTime...to items
  timestamps: true
})

recipeSchema.plugin(normalize)

export const RecipeModel = model('Recipe', recipeSchema);