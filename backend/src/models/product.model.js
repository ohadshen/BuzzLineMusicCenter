"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    productType: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "ProductType",
        required: true,
    },
    company: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Company",
    }
});
var Post = (0, mongoose_1.model)("Product", productSchema);
exports.default = Post;
