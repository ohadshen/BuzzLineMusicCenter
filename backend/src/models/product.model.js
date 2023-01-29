import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  productType: {
    type: Schema.Types.ObjectId,
    ref: "ProductType",
    required: true,
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
  }
});

const Post = model("Product", productSchema);

export default Post;
