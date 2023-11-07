import { loginController } from '#controllers/auth/index.js';
import { validate } from '#middlewares/index.js';
import { loginSchema } from '#schemas/index.js';

export default function (router) {
  router.post('/auth/login', validate(loginSchema), loginController);
}
