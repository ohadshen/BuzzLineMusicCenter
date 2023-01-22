import { getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
    editProduct } from "../services/product.service.js";


const getAllProductsController = async (req, res) => await getAllProducts();

const getProductByIdController = async (req, res) => await getProductById(req.params.id);

const createProductController = async (req, res) => await createProduct(req.body);

const deleteProductController = async (req, res) => await deleteProduct(req.params.id);

const editProductController = async (req, res) => await editProduct(req.body);

export { getAllProductsController,
        getProductByIdController,
        createProductController,
        deleteProductController,
        editProductController };