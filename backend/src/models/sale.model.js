import { Schema, model } from "mongoose";

const saleSchema = new Schema({
  products: [{
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  }],
  // Foreign key to firebase users
  user: {
    type: String,
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

const Sale = model("Sale", saleSchema);

export default Sale;
