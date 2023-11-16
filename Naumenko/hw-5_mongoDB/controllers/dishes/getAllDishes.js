import { Dish } from "../../models/dish.js";

export const getAllDishes = (app) => {
  app.get("/api/dishes", async (req, res) => {
    try {
      const dishes = await Dish.find().populate("chef").exec();
      res.status(200).json(dishes);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
};
