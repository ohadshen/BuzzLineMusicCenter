import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import firebase from "../../services/firebase";
import 'firebase/compat/auth';

const LoginFirebase = (email: string, password: string) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      firebase.auth().currentUser.getIdToken().then((token) => {
        localStorage.setItem("token", token);
      });
    });
}

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      login!!!
      <Button
              variant="secondary"
              className="costumeBtn"
              onClick={() => LoginFirebase("meyBoi22@gmail.com", "123123")}
      >
              <br />
              Add To Cart
            </Button>
    </div>
  );
};

export default Login;
