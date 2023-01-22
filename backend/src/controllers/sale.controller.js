import { getAllSales,
    getSaleById,
    createSale } from "../services/sale.service.js";
import { getProductById } from "../services/product.service.js";


const getAllSalesController = async (req, res) => await getAllSales();

const getSaleByIdController = async (req, res) => await getSaleById(req.params.id);

const createSaleController = async (req, res) => { 
    const user = req.root;
    const totalPrice = req.products.reduce(
        (total, product) => total + getProductById(product).price
        , 0);
    await createSale({ ...req.body, user: user.id, date: new Date(), totalPrice });
}


export { getAllSalesController,
        getSaleByIdController,
        createSaleController };