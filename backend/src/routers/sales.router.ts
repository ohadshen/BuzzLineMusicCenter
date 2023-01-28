import { Router } from "express";
import { getAllSalesController,
    getSaleByIdController,
    createSaleController } from "../controllers/sale.controller.js";
const router = Router();
  
router.route("/")
    .get(getAllSalesController)
    .post(createSaleController)

router.route("/:id")
    .get(getSaleByIdController)

export default router;
  