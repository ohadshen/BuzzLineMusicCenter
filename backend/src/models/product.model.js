import { Schema, model } from "mongoose";

const productSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
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

const Product = model("Product", productSchema);

export default Product;
