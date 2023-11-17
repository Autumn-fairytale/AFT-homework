import { Review } from "../../../models/review.js";

export const getReviewById = async (app) => {
  app.get("/api/reviews/:reviewId", async (req, res) => {
    const { reviewId } = req.params;
    const review = await Review.findById(
      reviewId,
      "-updatedAt -createdAt"
    ).exec();
    res.status(200).json(review);
  });
};
