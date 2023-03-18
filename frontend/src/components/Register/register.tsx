import React, { useContext, useState } from "react";
import "./register.css";
import http from "../../services/http";
import { Button, Form } from "react-bootstrap";
import { User } from "../../models/user.model";
import { useNavigate } from "react-router-dom";
import { LoginFirebase } from "../../services/firebase";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isPasswordsSimilar()) {
      const user: User = {
        name,
        email,
        password,
      };

      http.post<User>("/register", user).then((response) => {
        console.log(response.data.email);
        LoginFirebase(email, password)
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            alert(error);
          });
      });
    } else {
      alert("Password and Confirm Password does not match");
    }
  };

  const isPasswordsSimilar = (): boolean => {
    return password === confirmPassword;
  };

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Form className="login-form" onSubmit={handleSubmit}>
      <h1 className="title text-center">Registration</h1>
      <Form.Group className="mb-3 email-form-group" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group
        className="mb-3 displayName-form-group"
        controlId="formBasicDisplayName"
      >
        <Form.Label>Display Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Display Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Control
          className="password-confirm"
          type="password"
          placeholder="Confirm Password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>
      <span className="register">
        already have a user?{" "}
        <a className="register-link" href="/login">
          login!
        </a>
      </span>
      <div className="col-md-12 text-center">
        <Button
          type="submit"
          variant="secondary"
          className="costumeBtn login-button"
        >
          Sign-Up
        </Button>
      </div>
    </Form>
  );
};

export default Register;
