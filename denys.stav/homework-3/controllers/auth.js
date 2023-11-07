import express from "express";




const authorization = (req, res, next) => {
    try {
        const  token  = req.token;
        const secret = req.secret
        if (!token) return res.sendStatus(401).json('you shall not pass... Gendalf');;

        const result = jwt.verify(token, secret);
        console.log(result)
        return next();
    } catch(err) {
        console.error(err);
        return res.sendStatus(401);
    }
}


export default authorization