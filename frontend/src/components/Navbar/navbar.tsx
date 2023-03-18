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

  const { name } = useGetUser();
  return (
    <Navbar variant="dark" className="navbar">
      <Navbar.Brand href="/" className="brand">
        BuzzLine
      </Navbar.Brand>
      <CheckoutNavButton
        onClick={() => {
          navigate("/checkout");
        }}
      />
      {name ? (
        <Nav className="ml-2">
          <Navbar.Text>Hello {name}!</Navbar.Text>
          <Nav.Link
            onClick={() => {
              LogoutFirebase().then(() => {
                navigate("/login");
              });
            }}
          >
            Logout
          </Nav.Link>
        </Nav>
      ) : (
        <Nav className="ml-2">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
      )}
    </Navbar>
  );
};

export default AppNavbar;
