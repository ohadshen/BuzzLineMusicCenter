import { User } from "../models/user.model.js";
//@ts-ignore
import { compare } from "bcrypt";
//@ts-ignore
import pkg from "jsonwebtoken";
const { sign, verify: _verify } = pkg;

//@ts-ignore
const authenticate = (req, res, next) => {
  const { username, password } = req.body;
  //@ts-ignore
  User.findOne({ username }, (error, user) => {
    if (error) {
      res.status(500).json({ message: error });
    } else if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      //@ts-ignore
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

//@ts-ignore
const verify = (req, res, next) => {
  next();

  const { authorization } = req.headers;
  if (!authorization) {
    console.error("No authorization header");
    res.status(401).json({ message: "No authorization header" });
  } else {
    const token = authorization.split(" ")[1];
    const decoded = _verify(
      token,
      process.env.JWT_SECRET,
      //@ts-ignore
      (error, decoded) => {
        if (error) {
          console.error(error);
          res.status(401).json({ message: "Invalid token" });
        }
        req.root = decoded;
      }
    );
    req.root = decoded;
    return next();
  }
};

export { verify, authenticate };
