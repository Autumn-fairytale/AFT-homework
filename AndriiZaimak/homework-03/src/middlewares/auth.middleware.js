import jwt from 'jsonwebtoken';

import { UnAuthorizedError } from '#helpers/errors.js';

const { JWT_SECRET } = process.env;

const auth = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) throw new UnAuthorizedError('No token provided');

  const [, token] = authorization.split('Bearer ');

  if (!token) throw new UnAuthorizedError('Invalid token format');

  try {
    const payload = jwt.verify(token, JWT_SECRET);

    req.body.user = { email: payload.email };

    next();
  } catch (error) {
    throw new UnAuthorizedError('Access denied');
  }
};

export default auth;
