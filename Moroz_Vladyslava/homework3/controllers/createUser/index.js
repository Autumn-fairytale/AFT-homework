import users_list from "../../db/users_list.js";
import { generateUniqueUserId } from "./helpers.js";

const create_user = (app) => {
  app.post("/create_user", (req, res) => {
    const { login, password } = req.body;
    const existUser = users_list.find((user) => user.login === login);
    if (existUser) {
      return res.sendStatus(400).json("User with this login already exist");
    }
    const userId = generateUniqueUserId();

    const newUser = { userId, login, password };

    users_list.push(newUser);

    res.json("User add succesfully").sendStatus(201);
  });
};

export default create_user;
