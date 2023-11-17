import { HttpError } from "../../../helpers/HttpError.js";
import { authenticate } from "../../../middlewares/authenticate.js";
import { validateBody } from "../../../middlewares/validateBody.js";
import { Review } from "../../../models/review.js";
import addReviewSchema from "../../../schemas/addReviewSchema.js";

export const addReview = (app) => {
  return app.post(
    "/api/reviews",
    authenticate,
    validateBody(addReviewSchema),
    async (req, res) => {
      const { _id: owner } = req.user;
      console.log("owner:", owner);
      const data = {
        ...req.body,
        owner,
        dish: "654fe4de18f1f5f14f2e1cc1",
      };

      const review = await Review.create(data);
      if (!review) {
        throw HttpError(404, "Not found");
      }
      res.status(201).json(review);
    }
  );
};
