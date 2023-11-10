import { app } from "./app.js";

import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const DB_HOST =
  "mongodb+srv://Mykola:TnjTm5YMYa7LqfT9@cluster0.yjtamal.mongodb.net/idlo?retryWrites=true&w=majority";

// підключення до БД

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3000, () => console.log("Server running")))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
