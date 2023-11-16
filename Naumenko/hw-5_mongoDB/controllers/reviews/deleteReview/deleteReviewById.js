import { HttpError } from "../../../helpers/HttpError.js";
import { ctrlWrapper } from "../../../helpers/ctrlWrapper.js";
import { Review } from "../../../models/review.js";

export const deleteReviewById = async (app) => {
  app.delete(
    "/api/reviews/:reviewId",

    ctrlWrapper(async (req, res) => {
      const { reviewId } = req.params;
      const result = await Review.findByIdAndDelete(reviewId).exec();
      console.log("result:", result);
      if (!result) {
        throw HttpError(404, "NotFound");
      }
      res.json({ message: "Delete success" });
    })
  );
};
