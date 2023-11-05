/* eslint-disable no-undef */
import fs from "fs/promises";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

import "dotenv/config";

import express from "express";
import moment from "moment";
import cors from "cors";
import { controllers } from "./controllers/index.js";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
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

const app = express();
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

app.listen(3000, () => console.log("Server running"));
