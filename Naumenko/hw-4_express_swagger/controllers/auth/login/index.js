import jwt from "jsonwebtoken";
import { users } from "../../../db/users.js";

const { SECRET_KEY } = process.env;

export const login = (app) => {
  app.post("/api/login", (req, res) => {
    const { login, password } = req.body;
    const user = users.find((user) => user.login === login);
    if (!user) {
      return res.sendStatus(401);
    }

    if (user.password !== password) {
      return res.sendStatus(401);
    }
    const payload = req.body;
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
    res.json({ token });
  });
};
