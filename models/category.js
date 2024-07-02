import { Schema, model } from "mongoose";
// import normalize from 'normalize-mongoose'
import { toJSON } from '@reis/mongoose-to-json'

//define category schema
const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, require: true }
}, {
  timestamps: true
});
//replacing normalize with toJSON
categorySchema.plugin(toJSON);

//export schema

export const categoryModel = model('Category', categorySchema)