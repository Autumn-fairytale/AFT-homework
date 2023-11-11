// Mongo_password: TnjTm5YMYa7LqfT9

/* eslint-disable no-undef */
import fs from "fs/promises";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

import "dotenv/config";

import express from "express";
import moment from "moment";
import cors from "cors";
import { controllers } from "./controllers/index.js";
// import mongoose from "mongoose";
// mongoose.set("strictQuery", true);

// const DB_HOST =
//   "mongodb+srv://Mykola:TnjTm5YMYa7LqfT9@cluster0.yjtamal.mongodb.net/idlo?retryWrites=true&w=majority";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Homework 4 express and swagger",
      version: "1.0.0",
      description: "A simple Express Library API",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./controllers/users/getAllUsers/swagger.js"],
};

const specs = swaggerJSDoc(options);

// mongoose.connect(DB_HOST).then(() => {
//   console.log("AAaaaa");
//   app.listen(3000, console.log("Appp"));
// });

export const app = express();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(cors());
app.use(express.json());

app.use(async (req, res, next) => {
  const { method, url } = req;
  const date = moment().format("DD-MM-YYYY_hh:mm:ss");
  await fs.appendFile("./server.log", `\n${method} ${url} ${date}`);
  next();
});

controllers(app);

app.use((req, res) => {
  res.status(404).json({ message: "Notfound" });
});
