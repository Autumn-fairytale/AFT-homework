import { nanoid } from "nanoid";
import { users } from "../../../db/users.js";

export const createUser = (req, res) => {
  const body = req.body;
  const user = { id: nanoid(), ...body, status: "active" };
  users.push(user);
  res.status(201).json(user);
};
