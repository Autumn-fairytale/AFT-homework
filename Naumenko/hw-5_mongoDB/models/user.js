import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
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
      unique: true,
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

userSchema.post("save", (error, data, next) => {
  console.log(error);
  error.status = 400;
  next();
});

export const User = model("user", userSchema);
