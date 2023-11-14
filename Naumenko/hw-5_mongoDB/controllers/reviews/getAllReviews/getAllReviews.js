import { Review } from "../../../models/review.js";

// export const getReviews = (app) => {
//   app.get("/api/reviews", async (req, res) => {
//     const users = await Review.find();
//     res.json(users);
//   });
// };

export const getAllReviews = (app) => {
  app.get("/api/reviews", async (req, res) => {
    try {
      const reviews = await Review.find();
      res.status(200).json(reviews);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
};
