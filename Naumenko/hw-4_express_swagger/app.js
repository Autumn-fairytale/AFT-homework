import fs from "fs/promises";
import express from "express";
import moment from "moment";
import cors from "cors";
import { controllers } from "./controllers/index.js";

const app = express();

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
