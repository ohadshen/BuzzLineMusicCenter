"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var company_controller_js_1 = require("../controllers/company.controller.js");
var router = (0, express_1.Router)();
router.route("/")
    .get(company_controller_js_1.getAllCompaniesController)
    .post(company_controller_js_1.createCompanyController);
router.route("/:id")
    .get(company_controller_js_1.getCompanyByIdController)
    .put(company_controller_js_1.editCompanyController)
    .delete(company_controller_js_1.deleteCompanyController);
exports.default = router;
