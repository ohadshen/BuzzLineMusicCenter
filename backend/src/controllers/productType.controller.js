import { getAllProductTypes,
     getProductTypeById,
     createProductType,
     deleteProductType,
     editProductType } from "../services/productType.service.js";


const getAllProductTypesController = async (req, res) => await getAllProductTypes();

const getProductTypeByIdController = async (req, res) => await getProductTypeById(req.params.id);

const createProductTypeController = async (req, res) => await createProductType(req.body);

const deleteProductTypeController = async (req, res) => await deleteProductType(req.params.id);

const editProdctTypeController = async (req, res) => await editProductType(req.body);

export { getAllProductTypesController,
        getProductTypeByIdController,
        createProductTypeController,
        deleteProductTypeController,
        editProdctTypeController };