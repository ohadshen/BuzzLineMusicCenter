import "./App.css";
import AppNavbar from "./components/Navbar/navbar";
import "bootstrap/dist/css/bootstrap.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Router from "./router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { ShoppingCartProvider } from "./context/shoppingCartContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ShoppingCartProvider>
        <BrowserRouter>
          <div className="App">
            <AppNavbar />
            <div className="container">
              <Router />
            </div>
          </div>
        </BrowserRouter>
      </ShoppingCartProvider>
    </QueryClientProvider>
  );
}

export default App;
