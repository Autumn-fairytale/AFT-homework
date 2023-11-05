import { createUser } from "./createUser.js";

export const register = (app) => {
  app.post("/api/register", createUser);
};
