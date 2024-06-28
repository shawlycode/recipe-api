import { Schema, model } from "mongoose";
import normalize from 'normalize-mongoose'

//define category schema
const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, require: true }
}, {
  timestamps: true
});
categorySchema.plugin(normalize);

//export schema

export const categoryModel = model('Category', categorySchema)