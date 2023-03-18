import { getAllSales,
    getSaleById,
    createSale } from "../services/sale.service.js";
import { getProductById } from "../services/product.service.js";
import { sendError } from "../shared/errorHandler.js";


const getAllSalesController = async (req, res) => {
    try {
        res.json(await getAllSales());
    } catch(err) {
        sendError('error get all Sales', err, res);
    }
}

const getSaleByIdController = async (req, res) => {
    try {
        res.json(await getSaleById(req.params.id));
    } catch(err) {
        sendError('error get Sale by ID', err, res);
    }
}

const createSaleController = async (req, res) => {
    const totalPrice = req.body.products.reduce(
        (total, product) => total + product.price
        , 0);
    try {
        res.json(await createSale({ ...req.body, user: req.user.user_id, date: new Date(), totalPrice }));
    } catch(err) {
        sendError('error creating Sale', err, res);
    }
}


export { getAllSalesController,
        getSaleByIdController,
        createSaleController };