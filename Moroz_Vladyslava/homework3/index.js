import express from "express";
import controllers from "./controllers/index.js";

const PORT = 3001;
const app = express();

app.use(express.json());

controllers(app);

// const auth = (req, res, next) => {
//   try {
//     const { token } = req.body;
//     if (!token) return res.sendStatus(401);
//   } catch (err) {
//     console.log(err);
//     return res.sendStatus(401);
//   }
// };
// app.get("/", login, (req, res) => {
//   res.send(req.user);
// });

// app.post("/login", (req, res) => {
//   const { name, password } = req.body;
//   const userValidation = name === "Alan" && password === "987654321";
//   if (!userValidation) {
//     return res.sendStatus(401);
//   }
//   const userId = "28122002";
//   const lastName = "Pento";

//   const token = jwt.sign({ userId, lastName }, secret);
//   return res.send(token);
// });

// app.post("/user", (req, res) => {
//   res.send("new user add succesfully");
// });

app.use((err, res, next) => {
  res.send(`error: ${err}`);
});

app.listen(PORT, () => {
  console.log(`server start on port ${PORT}`);
});
