import { User } from "../../../models/user.js";

export const register = (app) => {
  app.post("/api/register", async (req, res) => {
    console.log("req.body:", req.body);
    const result = await User.create(req.body);
    console.log("result:", result);
    res.status(201).json(result);
  });
};
