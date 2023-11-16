import { Chef } from "../../models/chef.js";

export const getAllChefs = (app) => {
  app.get("/api/chefs", async (req, res) => {
    try {
      const chefs = await Chef.find().exec();
      res.status(200).json(chefs);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
};
