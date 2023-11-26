import { app } from "./app.js";

import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const { DB_HOST } = process.env;

// підключення до БД

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(4000, () => console.log("Server running")))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
