"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @/main.js
var express_1 = __importStar(require("express"));
var mongoose_1 = require("mongoose");
//@ts-ignore
var cors_1 = __importDefault(require("cors"));
var user_model_js_1 = require("./models/user.model.js");
var auth_service_js_1 = require("./services/auth.service.js");
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var app = (0, express_1.default)();
app.use((0, express_1.json)());
app.use((0, cors_1.default)());
var username = process.env.MONGO_USERNAME;
var password = process.env.MONGO_PASSWORD;
var mongoConnectionString = "mongodb+srv://".concat(username, ":").concat(password, "@buzzlinemongo.xonfous.mongodb.net/?retryWrites=true&w=majority");
app.use(function (req, res, next) {
    console.log("Time:", new Date().toISOString(), "Method:", req.method, "Route: ", req.path);
    // if (req.path !== "/login" && req.path !== "/register") {
    //   req.root = verify(req, res, next);
    // }
    next();
    res.on("finish", function () {
        console.log("Response: ", res.statusCode);
    });
});
app.post("/login", auth_service_js_1.authenticate);
app.post("/register", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newUser, insertedUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newUser = new user_model_js_1.User(__assign({}, req.body));
                return [4 /*yield*/, newUser.save()];
            case 1:
                insertedUser = _a.sent();
                return [2 /*return*/, res.status(201).json(insertedUser)];
        }
    });
}); });
var company_router_js_1 = __importDefault(require("./routers/company.router.js"));
var product_router_js_1 = __importDefault(require("./routers/product.router.js"));
var productType_router_js_1 = __importDefault(require("./routers/productType.router.js"));
var sales_router_js_1 = __importDefault(require("./routers/sales.router.js"));
app.use("/companies", auth_service_js_1.verify, company_router_js_1.default);
app.use("/products", auth_service_js_1.verify, product_router_js_1.default);
app.use("/productTypes", auth_service_js_1.verify, productType_router_js_1.default);
app.use("/sales", auth_service_js_1.verify, sales_router_js_1.default);
// app.use((errorMessage, req, res, next) => {
//   res.status(500).json({
//     message: errorMessage
//   });
// });
app.use("*", function (req, res) {
    res.status(404).json({
        message: "Page not found",
        error: {
            statusCode: 404,
            message: "You reached a route that is not defined on this server",
        },
    });
});
var start = function () { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log(mongoConnectionString);
                return [4 /*yield*/, (0, mongoose_1.connect)(mongoConnectionString)];
            case 1:
                _a.sent();
                app.listen(3001, function () { return console.log("Server started on port 3001"); });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                process.exit(1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
start();
