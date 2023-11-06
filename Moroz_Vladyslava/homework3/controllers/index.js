import create_user from "./createUser/index.js";
import login from "./login/index.js";

const controllers = (app) => {
  login(app);
  create_user(app);
};

export default controllers;
