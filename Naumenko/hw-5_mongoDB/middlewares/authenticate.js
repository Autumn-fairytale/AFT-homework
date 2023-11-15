import { HttpError } from "../helpers/HttpError.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

const { SECRET_KEY } = process.env;

export const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;

  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(HttpError(401));
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    req.user = user;
  } catch (error) {
    next(HttpError(401, "User not found"));
  }

  next();
};
