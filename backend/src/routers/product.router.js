"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var product_controller_js_1 = require("../controllers/product.controller.js");
var router = (0, express_1.Router)();
router.route("/")
    .get(product_controller_js_1.getAllProductsController)
    .post(product_controller_js_1.createProductController);
router.route("/:id")
    .get(product_controller_js_1.getProductByIdController)
    .put(product_controller_js_1.editProductController)
    .delete(product_controller_js_1.deleteProductController);
exports.default = router;
