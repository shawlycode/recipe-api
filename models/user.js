import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";


//create userSchema
const userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },

},
  { timestamps: true })
userSchema.plugin(toJSON)
export const UserModel = model('User', userSchema);