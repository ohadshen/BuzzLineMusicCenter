import { Router } from "express";
import { getAllProductsController,
    getProductByIdController,
    createProductController,
    deleteProductController,
    editProductController,
    getProductsValueForCompaniesController } from "../controllers/product.controller.js";
const router = Router();
  
router.route("/")
    .get(getAllProductsController)
    .post(createProductController)

router.route("/:id")
    .get(getProductByIdController)
    .put(editProductController)
    .delete(deleteProductController)

router.route("/companies/value")
    .get(getProductsValueForCompaniesController)

export default router;
  