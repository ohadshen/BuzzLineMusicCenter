import { getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
    editProduct } from "../services/product.service.js";
import { sendError } from "../shared/errorHandler.js";


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
        res.json(await createProduct(req.body));
    } catch(err) {
        sendError('error creating Product', err, res);
    }
}

const deleteProductController = async (req, res) => {
    try {
        res.json(await deleteProduct(req.params.id));
    } catch(err) {
        sendError('error deleting Product', err, res);
    }
}

const editProductController = async (req, res) => {
    try {
        res.json(await editProduct(req.body));
    } catch(err) {
        sendError('error editing Product', err, res);
    }
}

export { getAllProductsController,
        getProductByIdController,
        createProductController,
        deleteProductController,
        editProductController };