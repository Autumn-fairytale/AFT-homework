// import { ctrlWrapper } from "../../../helpers/ctrlWrapper.js";
import mongoose from "mongoose";
import { Review } from "../../../models/review.js";

const ObjectId = mongoose.Types.ObjectId;

export const getReviewsByChefId = (app) => {
  app.get(
    "/api/reviews/by-chef/:chefId",

    async (req, res) => {
      const { chefId } = req.params;
      const { page = 1, limit = 1 } = req.query;

      try {
        const reviews = await Review.aggregate([
          {
            $lookup: {
              from: "dishes",
              localField: "dish",
              foreignField: "_id",
              as: "dish",
            },
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
            $project: {
              // _id: 0,
              // id: "$_id",
              rating: 1,
              review: 1,
              dish: 1,
              owner: 1,

              createdAt: 1,
              // dish: {
              //   id: "$dish._id",
              // },
            },
          },
          {
            $unwind: "$dish",
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
        ]).exec();

        res.status(200).json(reviews);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  );
};
