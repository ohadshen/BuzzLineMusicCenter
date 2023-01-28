"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var sale_controller_js_1 = require("../controllers/sale.controller.js");
var router = (0, express_1.Router)();
router.route("/")
    .get(sale_controller_js_1.getAllSalesController)
    .post(sale_controller_js_1.createSaleController);
router.route("/:id")
    .get(sale_controller_js_1.getSaleByIdController);
exports.default = router;
