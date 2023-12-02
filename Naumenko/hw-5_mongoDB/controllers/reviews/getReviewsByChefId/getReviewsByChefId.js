// import { ctrlWrapper } from "../../../helpers/ctrlWrapper.js";
import mongoose from "mongoose";
import { Review } from "../../../models/review.js";

const ObjectId = mongoose.Types.ObjectId;

export const getReviewsByChefId = (app) => {
  app.get(
    "/api/reviews/by-chef/:chefId",

    async (req, res) => {
      const { chefId } = req.params;
      const { page = 1, limit = 5 } = req.query;

      try {
        const data = await Review.aggregate([
          {
            $lookup: {
              from: "dishes",
              localField: "dish",
              foreignField: "_id",
              as: "dish",
            },
          },
          {
            $unwind: "$dish",
          },
          {
            $lookup: {
              from: "users",
              localField: "owner",
              foreignField: "_id",
              as: "owner",
            },
          },
          {
            $unwind: "$owner",
          },
          {
            $match: {
              "dish.chef": new ObjectId(chefId),
            },
          },
          {
            $facet: {
              reviews: [
                {
                  $skip: (page - 1) * limit,
                },
                {
                  $limit: parseInt(limit),
                },
                {
                  $project: {
                    _id: 0,
                    id: "$_id",
                    rating: 1,
                    review: 1,
                    dish: {
                      id: "$dish._id",
                      chef: 1,
                    },
                    owner: {
                      id: "$owner._id",
                      name: 1,
                    },
                    createdAt: 1,
                  },
                },
              ],
              totalReviews: [
                {
                  $count: "count",
                },
              ],
            },
          },

          {
            $unwind: "$totalReviews",
          },
          {
            $project: {
              totalReviews: "$totalReviews.count",
              reviews: 1,
            },
          },
        ]).exec();

        if (data && data[0] && data[0].reviews) {
          const responseObject = {
            reviews: data[0].reviews,
            totalReviews: data[0].totalReviews,
          };

          res.status(200).json(responseObject);
        } else {
          res.status(200).json({ reviews: [], totalReviews: 0 });
        }
      } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  );
};
