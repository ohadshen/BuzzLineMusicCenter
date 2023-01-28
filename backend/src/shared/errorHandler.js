"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendError = void 0;
//@ts-ignore
var sendError = function (message, err, res) {
    console.error(err);
    res.status(500).json({
        message: message,
    });
};
exports.sendError = sendError;
