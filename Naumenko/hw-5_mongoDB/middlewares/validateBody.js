import { HttpError } from "../helpers/HttpError.js";

export const validateBody = (schema) => {
  const func = (req, res, next) => {
    console.log("req:", req.body);
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, "missing required name field"));
    }
    next();
  };

  return func;
};
