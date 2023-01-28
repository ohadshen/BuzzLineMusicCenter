import Sale from "../models/sale.model.js";

const getAllSales = async () =>
  await Sale.find({})
    .populate({ path: "user", select: "-_id username" })
    .populate("products");
//@ts-ignore
const getSaleById = async (id) =>
  await Sale.findById(id)
    .populate({ path: "user", select: "-_id username" })
    .populate("products");

//@ts-ignore
const createSale = async (sale) => await Sale.create(sale);

export { getAllSales, getSaleById, createSale };
