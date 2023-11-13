import { ZodError } from 'zod';
import { ValidationError } from '#helpers/errors.js';

const validate = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (e) {
    if (e instanceof ZodError) {
      throw new ValidationError(
        'Validation Error',
        e.errors.reduce((acc, err) => ({ ...acc, [err.path.at(1)]: err.message }), {})
      );
    } else {
      throw new ValidationError(e.message);
    }
  }
};

export default validate;
