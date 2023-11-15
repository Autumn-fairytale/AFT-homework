import { HttpError } from "../../../helpers/HttpError.js";
import { ctrlWrapper } from "../../../helpers/ctrlWrapper.js";
import { User } from "../../../models/user.js";
import bcrypt from "bcrypt";
import registerSchema from "../../../schemas/registerShhema.js";
import { validateBody } from "../../../middlewares/validateBody.js";

export const register = async (app) => {
  app.post(
    "/api/register",
    validateBody(registerSchema),
    ctrlWrapper(async (req, res) => {
      const { password, email } = req.body;

      const user = await User.findOne({ email });

      if (user) {
        throw HttpError(409, "Email in use");
      }
      const createHashPassword = await bcrypt.hash(password, 10);
      console.log("createHashPassword:", createHashPassword);
      const result = await User.create({
        ...req.body,

        password: createHashPassword,
      });

      res.status(201).json(result);
    })
  );
};
