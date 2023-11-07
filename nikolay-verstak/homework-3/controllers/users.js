import { Router } from "express";
import authUser from "../middlewares/auth.js";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/", (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    const token = jwt.sign({ email }, "secretKey");

    res.send(token);
});

router.get("/:id", authUser, (req, res) => {
    const userId = req.params.id;
    res.json({ email: req.body.email, userId });
});

export default router;
