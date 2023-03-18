import { User } from "../models/user.model";
import jwt from "jwt-decode";

export const useGetUser = (): User => {
  const token = localStorage.getItem("token");

  if (token) {
    const user = jwt(token) as User;
    return { name: user.name, email: user.email, role: user.role };
  }

  return { name: "", email: "", role: "" };
};
