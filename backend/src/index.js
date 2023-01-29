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
const mongoConnectionString = `mongodb+srv://${username}:${password}@buzzlinemongo.xonfous.mongodb.net/?retryWrites=true&w=majority`;

app.use((req, res, next) => {
  console.log(
    "Time:", 
    new Date().toISOString(),
    "Method:",
    req.method,
    "Route: ",
    req.path
  );
  // if (req.path !== "/login" && req.path !== "/register") {
  //   req.root = verify(req, res, next);
  // }
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

app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Page not found',
    error: {
      statusCode: 404,
      message: 'You reached a route that is not defined on this server',
    },
  });
});

const start = async () => {
  try {
    console.log(mongoConnectionString);
    await connect(mongoConnectionString);
    app.listen(3001, () => console.log("Server started on port 3001"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
