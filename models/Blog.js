import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;
 
const blogSchema = new Schema({
  title: String,
  body: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
export default model("Blog", blogSchema);