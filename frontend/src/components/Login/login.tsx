import React, { useEffect, useState } from "react";
import "./login.css";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>LOGIN!</div>
  );
};

export default Login;
