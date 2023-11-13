import express from 'express';

import login from './auth/login.route.js';
import users from './users/hello.route.js';

const router = express.Router();

login(router);
users(router);

export default router;
