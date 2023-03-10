import { Schema, model } from "mongoose";

const saleSchema = new Schema({
  products: [{
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  }
});

const Post = model("Sale", saleSchema);

export default Post;
