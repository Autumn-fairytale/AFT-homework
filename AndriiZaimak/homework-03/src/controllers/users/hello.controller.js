import { asyncWrapper } from '#helpers/index.js';

export const helloController = asyncWrapper(async (req, res) => {
  const { user } = req.body;

  return res.send({ status: 'success', data: { hello: `Hello <${user.email}>` } });
});
