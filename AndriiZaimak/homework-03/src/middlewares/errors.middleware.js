import { BaseError } from '#helpers/index.js';
import logger from '#helpers/logger.js';

export const error = (error, _req, res, _next) => {
  logger.error(`${error.message}\n${error.stack}`);

  if (error instanceof BaseError) {
    const { code, status, errors, message } = error;
    const data = { status, message };

    if (errors) data.errors = errors;

    return res.status(code).send(data);
  }

  return res.status(500).send({ status: 'fail', message: 'Internal server error' });
};
