import { Schema, model } from "mongoose";

const productTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
  }
});

const ProductType = model("ProductType", productTypeSchema);

export default ProductType;
