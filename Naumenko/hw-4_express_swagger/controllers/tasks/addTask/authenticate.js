import jwt from "jsonwebtoken";
const { SECRET_KEY } = process.env;

export const authenticate = (req, res, next) => {
  try {
    const { token } = req.body;
    console.log("token:", token);
    if (!token) {
      return res.sendStatus(401);
    }

    const result = jwt.verify(token, SECRET_KEY);
    console.log(result);
    return next();
  } catch (err) {
    console.error(err);
    return res.sendStatus(401);
  }
};
