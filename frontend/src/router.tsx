import React from "react";
import { Route, Routes } from "react-router-dom";
import CheckoutPage from "./components/CheckoutPage";
import HomePage from "./components/HomePage";
import Login from "./components/Login/login";
import ManageProductsPage from "./components/ManageProductsPage";
import Register from "./components/Register/register";
import StatisticsPage from "./components/StatisticsPage";
import SalesPage from "./components/SalesPage/index";

const Router = () => (
  <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/checkout" element={<CheckoutPage />} />
    <Route path="/manageProducts" element={<ManageProductsPage />} />
    <Route path="/sales" element={<SalesPage />} />
    <Route path="statistics" element={<StatisticsPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<HomePage />} />
  </Routes>
);

export default Router;
