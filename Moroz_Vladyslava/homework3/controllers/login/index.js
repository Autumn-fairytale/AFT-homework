import users_list from "../../db/users_list.js";
import jwt from "jsonwebtoken";

const token_secret = "secret";

const login = (app) => {
  app.post("/login", (req, res) => {
    const { login, password } = req.body;
    const user = users_list.find((user) => user.login === login);
    if (!user) {
      return res.sendStatus(401);
    }
    if (user.password !== password) {
      return res.sendStatus(401);
    }
    const token = jwt.sign(req.body, token_secret);
    return res.send(token);
  });
};
export default login;
