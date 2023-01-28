import { Router } from "express";
import { getAllProductTypesController,
    getProductTypeByIdController,
    createProductTypeController,
    deleteProductTypeController,
    editProdctTypeController } from "../controllers/productType.controller.js";
const router = Router();
  
router.route("/")
    .get(getAllProductTypesController)
    .post(createProductTypeController)

router.route("/:id")
    .get(getProductTypeByIdController)
    .put(editProdctTypeController)
    .delete(deleteProductTypeController)

export default router;
  