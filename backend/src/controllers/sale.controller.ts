import {
  getAllSales,
  getSaleById,
  createSale,
} from "../services/sale.service.js";
import { getProductById } from "../services/product.service.js";
import { sendError } from "../shared/errorHandler.js";

//@ts-ignore
const getAllSalesController = async (req, res) => {
  try {
    res.json(await getAllSales());
  } catch (err) {
    sendError("error get all Sales", err, res);
  }
};

//@ts-ignore
const getSaleByIdController = async (req, res) => {
  try {
    res.json(await getSaleById(req.params.id));
  } catch (err) {
    sendError("error get Sale by ID", err, res);
  }
};

//@ts-ignore
const createSaleController = async (req, res) => {
  const user = req.root;
  const totalPrice = req.products.reduce(
    //@ts-ignore
    (total, product) => total + getProductById(product).price,
    0
  );
  try {
    res.json(
      await createSale({
        ...req.body,
        user: user.id,
        date: new Date(),
        totalPrice,
      })
    );
  } catch (err) {
    sendError("error creating Sale", err, res);
  }
};

export { getAllSalesController, getSaleByIdController, createSaleController };
