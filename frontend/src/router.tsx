import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/login";
import Register from "./components/Register/register";

const Router = () => (
  <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default Router;
