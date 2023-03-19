import { Router } from "express";
import { getAllProductsController,
    getProductByIdController,
    createProductController,
    deleteProductController,
    editProductController,
    getProductsValueForCompaniesController,
    getNumOfProductsForCompaniesController } from "../controllers/product.controller.js";
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

router.route("/companies/count")
    .get(getNumOfProductsForCompaniesController)

export default router;
  