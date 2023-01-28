import { Schema, model } from "mongoose";

const productTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
  }
});

const Post = model("ProductType", productTypeSchema);

export default Post;
