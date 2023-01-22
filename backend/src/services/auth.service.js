import { User } from "../models/user.model.js";
import { compare } from "bcrypt";
import pkg from 'jsonwebtoken';
const { sign, verify: _verify } = pkg;

const authenticate = (req, res, next) => {
  const { username, password } = req.body.body;
  User.findOne({ username }, (error, user) => {
    if (error) {
      res.status(500).json({ message: error });
    } else if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      compare(password, user.password, (error, result) => {
        if (error) {
          res.status(500).json({ message: error });
        } else if (result) {
          // Generate a JWT and send it as the response
          const token = sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET,
            {
              expiresIn: "1d",
            }
          );
          res.status(200).json({ token });
        } else {
          res.status(401).json({ message: "Incorrect password" });
        }
      });
    }
  });
  return res;
};

const verify = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ message: "No authorization header" });
  } else {
    const token = authorization.split(" ")[1];
    const decoded = _verify(
      token,
      process.env.JWT_SECRET,
      (error, decoded) => {
        if (error) {
          res.status(401).json({ message: "Invalid token" });
        }
        return decoded;
      }
    );
    return decoded;
  }
};

export { verify, authenticate };
