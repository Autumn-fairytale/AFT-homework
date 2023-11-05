import { login } from "./auth/login/index.js";
import { register } from "./auth/register/index.js";
import { addTask } from "./tasks/addTask/index.js";
import { getUsers } from "./users/getAllUsers/index.js";
import { getUserById } from "./users/getById/index.js";

export const controllers = (app) => {
  getUsers(app);
  getUserById(app);
  register(app);
  login(app);
  addTask(app);
};
