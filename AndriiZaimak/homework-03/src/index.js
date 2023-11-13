import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import router from '#routes/index.js';
import { error } from '#middlewares/index.js';

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.use((_, res) => {
  res.status(404).send('Page not found');
});

app.use(error);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
