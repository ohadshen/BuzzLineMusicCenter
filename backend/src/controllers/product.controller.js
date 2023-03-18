import { getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
    editProduct } from "../services/product.service.js";
import { sendError } from "../shared/errorHandler.js";

import {io} from "../services/socketio.service.js";
import { REFETCH_PRODUCTS_EVENT } from '../../events.js';

const getAllProductsController = async (req, res) => {
    try {
        res.json(await getAllProducts());
    } catch(err) {
        sendError('error get all Products', err, res);
    }
}

const getProductByIdController = async (req, res) => {
    try {
        res.json(await getProductById(req.params.id));
    } catch(err) {
        sendError('error get Product by ID', err, res);
    }
}
const createProductController = async (req, res) => {
    try {
        const result = await createProduct(req.body)
        io.emit(REFETCH_PRODUCTS_EVENT, req.body);
        res.json(result);
    } catch(err) {
        sendError('error creating Product', err, res);
    }
}

const deleteProductController = async (req, res) => {
    try {
        const result = await deleteProduct(req.params.id)
        io.emit(REFETCH_PRODUCTS_EVENT, req.body);
        res.json(result);
    } catch(err) {
        sendError('error deleting Product', err, res);
    }
}

const editProductController = async (req, res) => {
    try {
        const result = await editProduct(req.body)
        io.emit(REFETCH_PRODUCTS_EVENT, req.body);
        res.json(result);
    } catch(err) {
        sendError('error editing Product', err, res);
    }
}

export { getAllProductsController,
        getProductByIdController,
        createProductController,
        deleteProductController,
        editProductController };