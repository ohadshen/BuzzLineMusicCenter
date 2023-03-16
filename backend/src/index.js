// @/main.js
import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import { mongoConnectionString, serviceAccount } from "./config.js";
import firebaseAdmin from 'firebase-admin';

const app = express();

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});

export { firebaseAdmin };

import { verify } from "./services/auth.service.js";

app.use(json());
app.use(cors());

app.use((req, res, next) => {
  console.log(
    "Time:", 
    new Date().toISOString(),
    "Method:",
    req.method,
    "Route: ",
    req.path
  );
  next();
  res.on("finish", function () {
    console.log("Response: ", res.statusCode);
  });
});

app.post("/register", async (req, res) => {
  const { email, displayName, password } = req.body;

  firebaseAdmin.auth().createUser({
    email,
    displayName,
    password
  })
  .then((user) => {
      // Signed in
      console.log(user);
      return res.status(201).json({
        email: user.email,
        displayName: user.displayName
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
          message: "error creating User"
      });
    });
});

import companyRoutes from "./routers/company.router.js";
import productRoutes from "./routers/product.router.js";
import productTypeRoutes from "./routers/productType.router.js";
import salesRoutes from "./routers/sales.router.js";


app.use("/companies", verify, companyRoutes);
app.use("/products", verify, productRoutes);
app.use("/productTypes", verify, productTypeRoutes);
app.use("/sales", verify, salesRoutes);

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
    await connect(mongoConnectionString);
    app.listen(3001, () => console.log("Server started on port 3001"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
