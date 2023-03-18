import ProductType from "../models/productType.model.js";

const getAllProductTypes = async () => await ProductType.find();

const getProductTypeById = async (id) => await ProductType.findById(id);

const createProductType = async (productType) => await ProductType.create(productType);

const deleteProductType = async (id) => await ProductType.findByIdAndDelete(id);

const editProductType = async (productType) => await ProductType.findByIdAndUpdate(productType._id, productType);

export { getAllProductTypes, getProductTypeById, createProductType, deleteProductType, editProductType };
