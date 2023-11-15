import Joi from "joi";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const registerSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegex).required(),
  phone: Joi.string().required(),
  location: Joi.string().required(),
});

export default registerSchema;

// const userSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Name is required"],
//     },
//     password: {
//       type: String,
//       required: [true, "Set password for user"],
//     },
//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       unique: true,
//     },
//     phone: {
//       type: String,
//       required: [true, "Phone is required"],
//       unique: true,
//     },
//     location: {
//       type: String,
//       required: [true, "Location is required"],
//       unique: true,
//     },
//     avatarURL: String,
//     token: {
//       type: String,
//       default: "",
//     },
//     role: {
//       type: String,
//       enum: ["user", "chef", "courier"],
//       default: "user",
//     },
//     chef: {
//       type: Schema.Types.ObjectId,
//       ref: "chef",
//     },
//     courier: {
//       type: Schema.Types.ObjectId,
//       ref: "courier",
//     },
//   },
//   { versionKey: false, timestamps: true }
// );
