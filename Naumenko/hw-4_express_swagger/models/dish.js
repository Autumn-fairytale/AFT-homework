import { Schema, model } from "mongoose";

const dishSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Dish name is required"],
    },
    description: {
      type: String,
      required: [true, "Dish description is required"],
    },
    chef: {
      type: Schema.Types.ObjectId,
      ref: "chef",
      required: [true, "Chef is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

const Dish = model("dish", dishSchema);

module.exports = Dish;
