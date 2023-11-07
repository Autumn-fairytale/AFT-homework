import express from "express";
import middlwareUsers from "./middleware/getUsers.js";
import log from "./middleware/login.js";
import  jwt  from "jsonwebtoken";


const app = express();
app.use(express.json());
app.use(middlwareUsers);
app.use(log);

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


app.post('/create-user', authorization, (req,res) => {
    console.log(req.body)
    res.send('You will pass... Gendalf')
})


app.use((err, req, res, next) => {
    res.send(req)
})

app.listen(3000, () => {
  console.log(`Сервер запущено на порту 3000`);
});