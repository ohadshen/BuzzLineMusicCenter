import { getAllProductTypes,
     getProductTypeById,
     createProductType,
     deleteProductType,
     editProductType } from "../services/productType.service.js";
import { sendError } from "../shared/errorHandler.js";


const getAllProductTypesController = async (req, res) => {
    try {
        res.json(await getAllProductTypes());
    } catch(err) {
        sendError('error get all ProductTypes', err, res);
    }
}

const getProductTypeByIdController = async (req, res) => {
    try {
        res.json(await getProductTypeById(req.params.id));
    } catch(err) {
        sendError('error get all ProductType by ID', err, res);
    }
}

const createProductTypeController = async (req, res) => {
    try {
        res.json(await createProductType(req.body));
    } catch(err) {
        console.error(err);
        sendError('error creating ProductType', err, res);
    }
}
const deleteProductTypeController = async (req, res) => {
    try {
        res.json(await deleteProductType(req.params.id));
    } catch(err) {
        sendError('error deleting ProductType', err, res);
    }
}

const editProdctTypeController = async (req, res) => {
    try {
        res.json(await editProductType(req.body));
    } catch(err) {
        sendError('error editing ProductType', err, res);
    }
}

export { getAllProductTypesController,
        getProductTypeByIdController,
        createProductTypeController,
        deleteProductTypeController,
        editProdctTypeController };