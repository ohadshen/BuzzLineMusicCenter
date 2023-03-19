import React from "react";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import CheckoutNavButton from "../CheckoutNavButton";
import "./navbar.css";
import jwt from "jwt-decode"; // import dependency
import { useGetUser } from "../../hooks/useGetUser";
import { LogoutFirebase } from "../../services/firebase";

const AppNavbar = () => {
  const navigate = useNavigate();

  const { name, role } = useGetUser();
  debugger;
  return (
    <Navbar variant="dark" className="navbar">
      <Navbar.Brand href="/" className="brand">
        BuzzLine
      </Navbar.Brand>
      <div className="me-4">
        <CheckoutNavButton
          onClick={() => {
            navigate("/checkout");
          }}
        />
      </div>
      <Nav>
        {name ? (
          <>
            <Navbar.Text className="greetingText">Hello {name}!</Navbar.Text>
            <Nav.Link
              onClick={() => {
                LogoutFirebase().then(() => {
                  navigate("/login");
                });
              }}
            >
              Logout
            </Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </>
        )}

        {role === "admin" ? (
          <>
            <Nav.Link href="/manageProducts">Manage Products</Nav.Link>
            <Nav.Link href="/statistics">Statistics</Nav.Link>
          </>
        ) : null }
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;
