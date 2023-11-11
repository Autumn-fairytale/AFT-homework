import { Schema, model } from "mongoose";

const reviewSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user", required: true },
    dish: { type: Schema.Types.ObjectId, ref: "dish", required: true },
    rating: { type: Number, required: true },
    comment: { type: String },
  },
  { versionKey: false, timestamps: true }
);

reviewSchema.post("save", (error, data, next) => {
  console.log(error);
  error.status = 400;
  next();
});

export const Review = model("review", reviewSchema);
