import { Router } from "express";
import { getAllCompaniesController,
        getCompanyByIdController,
        createCompanyController,
        deleteCompanyController,
        editCompanyController } from "../controllers/company.controller.js";
const router = Router();
  
router.route("/")
    .get(getAllCompaniesController)
    .post(createCompanyController)

router.route("/:id")
    .get(getCompanyByIdController)
    .put(editCompanyController)
    .delete(deleteCompanyController)

export default router;
  