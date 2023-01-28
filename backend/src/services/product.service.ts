import Product from "../models/product.model.js";

//@ts-ignore
const getAllProducts = async () =>
  await Product.find({}).populate("productType company");

//@ts-ignore
const getProductById = async (id) =>
  await Product.findById(id).populate("productType company");

//@ts-ignore
const createProduct = async (product) => await Product.create(product);

//@ts-ignore
const deleteProduct = async (id) => await Product.findByIdAndDelete(id);

//@ts-ignore
const editProduct = async (product) =>
  await Product.findByIdAndUpdate(product.id, product);

export {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  editProduct,
};
