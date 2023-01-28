import ProductType from "../models/productType.model.js";

//@ts-ignore
const getAllProductTypes = async () => await ProductType.find();

//@ts-ignore
const getProductTypeById = async (id) => await ProductType.findById(id);

//@ts-ignore
const createProductType = async (productType) =>
  await ProductType.create(productType);

//@ts-ignore
const deleteProductType = async (id) => await ProductType.findByIdAndDelete(id);

//@ts-ignore
const editProductType = async (productType) =>
  await ProductType.findByIdAndUpdate(productType.id, productType);

export {
  getAllProductTypes,
  getProductTypeById,
  createProductType,
  deleteProductType,
  editProductType,
};
