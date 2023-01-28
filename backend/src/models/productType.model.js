"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var productTypeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    }
});
var Post = (0, mongoose_1.model)("ProductType", productTypeSchema);
exports.default = Post;
