import jwt from 'jsonwebtoken';
import { asyncWrapper, ValidationError } from '#helpers/index.js';

const { JWT_SECRET } = process.env;

export const loginController = asyncWrapper(async (req, res) => {
  const { email, password } = req.body;

  if (email !== 'mockEmail@gmail.com' || password !== 'mockPassword')
    throw new ValidationError('Incorrect email or password');

  const accessToken = jwt.sign({ email }, JWT_SECRET);

  return res.send({ status: 'success', data: { email, accessToken } });
});
