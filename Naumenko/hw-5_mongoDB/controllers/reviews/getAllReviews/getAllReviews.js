import { Review } from "../../../models/review.js";

export const getAllReviews = (app) => {
  app.get("/api/reviews", async (req, res) => {
    try {
      const reviews = await Review.find({}, "-updatedAt -createdAt")
        .populate("owner", "name _id")
        .exec();
      res.status(200).json(reviews);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
};
