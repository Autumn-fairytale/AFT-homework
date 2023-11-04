import { createUser } from "./helpers.js";

export const register = (app) => {
  app.post("/api/register", createUser);
};
