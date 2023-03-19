// @/main.js
import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import { mongoConnectionString, serviceAccount } from "./config.js";
import firebaseAdmin from 'firebase-admin';
import http from 'http';
import { initSocketIO } from "./services/socketio.service.js";

const app = express();
const server = http.createServer(app);

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
  const { email, name, password } = req.body;

  firebaseAdmin.auth().createUser({
    email,
    name,
    password
  })
  .then(async (user) => {
    if (user.email.includes("admin")) {
      await firebaseAdmin.auth().setCustomUserClaims(user.uid, { role: "admin" });
    } else {
      await firebaseAdmin.auth().setCustomUserClaims(user.uid, { role: "user" });
    }
      return res.status(201).json({
        email: user.email,
        name: user.name
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
    server.listen(3001, () => console.log("Server started on port 3001"));
    initSocketIO(server)

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
