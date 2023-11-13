import { helloController } from '#controllers/users/index.js';
import { auth } from '#middlewares/index.js';

export default function (router) {
  router.get('/users/hello', auth, helloController);
}
