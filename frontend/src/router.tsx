import React from "react";
import { Route, Routes } from "react-router-dom";
import CheckoutPage from "./components/CheckoutPage";
import HomePage from "./components/HomePage";
import Login from "./components/Login/login";
import Register from "./components/Register/register";

const Router = () => (
  <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/checkout" element={<CheckoutPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<HomePage />} />
  </Routes>
);

export default Router;
