"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var productType_controller_js_1 = require("../controllers/productType.controller.js");
var router = (0, express_1.Router)();
router.route("/")
    .get(productType_controller_js_1.getAllProductTypesController)
    .post(productType_controller_js_1.createProductTypeController);
router.route("/:id")
    .get(productType_controller_js_1.getProductTypeByIdController)
    .put(productType_controller_js_1.editProdctTypeController)
    .delete(productType_controller_js_1.deleteProductTypeController);
exports.default = router;
