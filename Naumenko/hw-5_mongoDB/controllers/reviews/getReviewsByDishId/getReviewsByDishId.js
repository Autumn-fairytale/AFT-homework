import mongoose from "mongoose";
import { ctrlWrapper } from "../../../helpers/ctrlWrapper.js";
import { Review } from "../../../models/review.js";

const ObjectId = mongoose.Types.ObjectId;

export const getReviewsByDishId = (app) => {
  app.get(
    "/api/reviews/by-dish/:dishId",

    ctrlWrapper(async (req, res) => {
      const { dishId } = req.params;
      const reviews = await Review.aggregate([
        {
          $match: {
            dish: new ObjectId(dishId),
          },
        },
        {
          $project: {
            _id: 0,
            id: "$_id",
            owner: 1,
            rating: 1,
            review: 1,
            dish: 1,
          },
        },
      ]).exec();
      res.status(200).json({ reviews });
    })
  );
};
