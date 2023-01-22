import Product from "../models/product.model.js";

const getAllProducts = async () => await Product.find({})
                                    .populate("productType company");
 
const getProductById = async (id) => await Product.findById(id)
                                        .populate("productType company");

const createProduct = async (product) => await Product.create(product);

const deleteProduct = async (id) => await Product.findByIdAndDelete(id);

const editProduct = async (product) => await Product.findByIdAndUpdate(product.id, product);

export { getAllProducts, getProductById, createProduct, deleteProduct, editProduct };
