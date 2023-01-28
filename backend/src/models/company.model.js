"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var companySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
    }
});
var Post = (0, mongoose_1.model)("Comapny", companySchema);
exports.default = Post;
