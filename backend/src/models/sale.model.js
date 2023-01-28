"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var saleSchema = new mongoose_1.Schema({
    products: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        }],
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    }
});
var Post = (0, mongoose_1.model)("Sale", saleSchema);
exports.default = Post;
