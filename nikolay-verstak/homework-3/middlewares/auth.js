import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
    const token = req.header("x-auth-token");

    if (!token) {
        return res.status(401).json({ message: "Unauthorized. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, "secretKey");
        req.body.email = decoded.email;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token" });
    }
};

export default authUser;
