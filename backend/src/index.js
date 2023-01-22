// @/main.js
import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import { User } from "./models/user.model.js";
import { authenticate, verify } from "./services/auth.service.js";
import * as dotenv from 'dotenv';
dotenv.config()

const app = express();

app.use(json());
app.use(cors());

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

app.use(async (req, res, next) => {
  console.log(
    "Time:", 
    new Date().toISOString(),
    "Method:",
    req.method,
    "Route: ",
    req.path
  );
  if (req.path !== "/login" && req.path !== "/register") {
    req.root = await verify(req, res, next);
  }
  next();
  res.on("finish", function () {
    console.log("Response: ", res.statusCode);
  });
});

app.post("/login", authenticate);

app.post("/register", async (req, res) => {
  const newUser = new User({ ...req.body });
  const insertedUser = await newUser.save();
  return res.status(201).json(insertedUser);
});

import companyRoutes from "./routers/company.router.js";
import productRoutes from "./routers/product.router.js";
import productTypeRoutes from "./routers/productType.router.js";
import salesRoutes from "./routers/sales.router.js";

app.use("/companies", companyRoutes);
app.use("/products", productRoutes);
app.use("/productTypes", productTypeRoutes);
app.use("/sales", salesRoutes);

const start = async () => {
  try {
    await connect(
      // TODO: real mongodb url!
      `mongodb-url${username}+${password}`
    );
    app.listen(3001, () => console.log("Server started on port 3001"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
