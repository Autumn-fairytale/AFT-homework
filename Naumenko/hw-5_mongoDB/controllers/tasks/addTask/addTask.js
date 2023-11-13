import { nanoid } from "nanoid";
import { tasks } from "../../../db/tasks.js";

export const add = (req, res) => {
  const task = { id: nanoid(), ...req.body, done: false };
  tasks.push(task);
  res.status(201).json(task);
};
