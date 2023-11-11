import { Schema, model } from "mongoose";

const chefSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    specialty: {
      type: String,
      required: [true, "Chef specialty is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

export const Chef = model("chef", chefSchema);
