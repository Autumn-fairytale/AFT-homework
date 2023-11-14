import { HttpError } from "../../../helpers/HttpError.js";
import { validateBody } from "../../../middlewares/validateBody.js";
import { Review } from "../../../models/review.js";
import addReviewSchema from "../../../schemas/addReviewSchema.js";

export const addReview = (app) => {
  return app.post(
    "/api/reviews",
    validateBody(addReviewSchema),
    async (req, res) => {
      const data = {
        ...req.body,
        owner: "654fe4de18f1f5f14f2e1cc1",
        dish: "654fe4de18f1f5f14f2e1cc1",
      };
      const review = await Review.create(data);
      if (!review) {
        throw HttpError(404, "Not found");
      }
      res.status(201).json({ status: "success", code: 201, data: review });
    }
  );
};
