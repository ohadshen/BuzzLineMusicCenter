import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { LoginFirebase } from "../../services/firebase";
import 'firebase/compat/auth';


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    LoginFirebase(email, password).then(() => {
      navigate('/');
    }).catch((error) => {
      var errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
          alert('Wrong password');
      } else {
          alert("Email not found");
      }
    });
  }

  return (
    <Form className="login-form" onSubmit={handleSubmit}>
      <h1 className="title text-center">Login</h1>
    <Form.Group className="mb-3 email-form-group" controlId="formBasicEmail">
      <Form.Label>Email address:</Form.Label>
      <Form.Control type="email" placeholder="Enter email" required
        value={ email } onChange={e => setEmail(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password:</Form.Label>
      <Form.Control type="password" placeholder="Password" required
        value={ password } onChange={e => setPassword(e.target.value)}/>
    </Form.Group>
    <span className="register">
      don't have a user? <a className="register-link" href="/register">register!</a>
    </span>
  <div className="col-md-12 text-center">
    <Button
              type="submit"
              variant="secondary"
              className="costumeBtn login-button"
      >
              Login
    </Button>
  </div>
  </Form>
  );
};

export default Login;
