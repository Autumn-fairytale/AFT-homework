import jwt from "jsonwebtoken";
import loginSchema from "../../../schemas/loginSchema.js";
import bcrypt from "bcrypt";
import { ctrlWrapper } from "../../../helpers/ctrlWrapper.js";
import { User } from "../../../models/user.js";
import { HttpError } from "../../../helpers/HttpError.js";
import { validateBody } from "../../../middlewares/validateBody.js";

const { SECRET_KEY } = process.env;

export const login = async (app) => {
  app.post(
    "/api/login",
    validateBody(loginSchema),
    ctrlWrapper(async (req, res) => {
      const { email, password } = req.body;
      console.log("SECRET_KEY:", SECRET_KEY);

      const user = await User.findOne({ email }).exec();

      if (!user) {
        throw HttpError(401, "Email or password is wrong");
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      console.log("passwordCompare:", passwordCompare);

      if (!passwordCompare) {
        throw HttpError(401, "Email or password is wrong");
      }

      const payload = { id: user._id };

      const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
      res.json({ token });
    })
  );
};
