import express from 'express'
import cors from "cors";
import {authRouter} from "./Routers/authRouter.js";
import {userRouter} from "./Routers/userRouter.js";

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors());
app.use(express.json())
app.use('/auth', authRouter)
app.use('/users', userRouter)

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server has been started on port: ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()