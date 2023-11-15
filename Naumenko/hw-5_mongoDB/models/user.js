import { Schema, model } from "mongoose";
import { handleMongooseError } from "../helpers/handleMongooseError.js";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    password: {
      type: String,
      minLength: 6,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      match: emailRegex,
      required: [true, "Email is required"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
      unique: true,
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    avatarURL: String,
    token: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["user", "chef", "courier"],
      default: "user",
    },
    chef: {
      type: Schema.Types.ObjectId,
      ref: "chef",
    },
    courier: {
      type: Schema.Types.ObjectId,
      ref: "courier",
    },
  },

  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

export const User = model("user", userSchema);
