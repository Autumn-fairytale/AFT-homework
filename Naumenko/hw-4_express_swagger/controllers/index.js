import { set as register } from "./auth/register/index.js";
import { set as getUsers } from "./users/getAllUsers/index.js";
import { set as getUserById } from "./users/getById/index.js";

export const controllers = (app) => {
  getUsers(app);
  getUserById(app);
  register(app);
};
