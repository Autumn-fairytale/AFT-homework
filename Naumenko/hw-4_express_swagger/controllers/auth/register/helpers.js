import { nanoid } from "nanoid";
import { users } from "../../../db/users.js";

export const createUser = (req, res) => {
  const body = req.body;
  console.log("body:", body);
  const user = { id: nanoid(), ...body, status: "active" };
  users.push(user);
  res.json(user);
};
