"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = exports.verify = void 0;
var user_model_js_1 = require("../models/user.model.js");
//@ts-ignore
var bcrypt_1 = require("bcrypt");
//@ts-ignore
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var sign = jsonwebtoken_1.default.sign, _verify = jsonwebtoken_1.default.verify;
//@ts-ignore
var authenticate = function (req, res, next) {
    var _a = req.body, username = _a.username, password = _a.password;
    //@ts-ignore
    user_model_js_1.User.findOne({ username: username }, function (error, user) {
        if (error) {
            res.status(500).json({ message: error });
        }
        else if (!user) {
            res.status(404).json({ message: "User not found" });
        }
        else {
            //@ts-ignore
            (0, bcrypt_1.compare)(password, user.password, function (error, result) {
                if (error) {
                    res.status(500).json({ message: error });
                }
                else if (result) {
                    // Generate a JWT and send it as the response
                    var token = sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
                        expiresIn: "1d",
                    });
                    res.status(200).json({ token: token });
                }
                else {
                    res.status(401).json({ message: "Incorrect password" });
                }
            });
        }
    });
    return res;
};
exports.authenticate = authenticate;
//@ts-ignore
var verify = function (req, res, next) {
    var authorization = req.headers.authorization;
    if (!authorization) {
        console.error("No authorization header");
        res.status(401).json({ message: "No authorization header" });
    }
    else {
        var token = authorization.split(" ")[1];
        var decoded = _verify(token, process.env.JWT_SECRET, 
        //@ts-ignore
        function (error, decoded) {
            if (error) {
                console.error(error);
                res.status(401).json({ message: "Invalid token" });
            }
            req.root = decoded;
        });
        req.root = decoded;
        return next();
    }
};
exports.verify = verify;
