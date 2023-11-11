import { add } from "./addTask.js";
import { authenticate } from "./authenticate.js";

export const addTask = (app) => {
  app.post("/api/tasks", authenticate, add);
};
