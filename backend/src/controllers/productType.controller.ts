import {
  getAllProductTypes,
  getProductTypeById,
  createProductType,
  deleteProductType,
  editProductType,
} from "../services/productType.service.js";
import { sendError } from "../shared/errorHandler.js";

//@ts-ignore
const getAllProductTypesController = async (req, res) => {
  try {
    res.json(await getAllProductTypes());
  } catch (err) {
    sendError("error get all ProductTypes", err, res);
  }
};

//@ts-ignore
const getProductTypeByIdController = async (req, res) => {
  try {
    res.json(await getProductTypeById(req.params.id));
  } catch (err) {
    sendError("error get all ProductType by ID", err, res);
  }
};

//@ts-ignore
const createProductTypeController = async (req, res) => {
  try {
    res.json(await createProductType(req.body));
  } catch (err) {
    console.error(err);
    sendError("error creating ProductType", err, res);
  }
};

//@ts-ignore
const deleteProductTypeController = async (req, res) => {
  try {
    res.json(await deleteProductType(req.params.id));
  } catch (err) {
    sendError("error deleting ProductType", err, res);
  }
};

//@ts-ignore
const editProdctTypeController = async (req, res) => {
  try {
    res.json(await editProductType(req.body));
  } catch (err) {
    sendError("error editing ProductType", err, res);
  }
};

export {
  getAllProductTypesController,
  getProductTypeByIdController,
  createProductTypeController,
  deleteProductTypeController,
  editProdctTypeController,
};
