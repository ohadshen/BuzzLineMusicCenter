import React, { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import "./register.css";
import { Button } from "react-bootstrap";
import http from "../../../services/http";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>REGISTER!</div>
  );
};

export default Register;
