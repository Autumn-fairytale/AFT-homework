const express = require('express');
const jwt = require('jsonwebtoken');

const secret = 'secret';

const app = express();
// controllers connection
// require('./controllers').set(app);
app.use(express.json());

const middleware1 = (req, res, next) => {
    req.user = { userName: 'Stas' };
    next();
}

const auth = (req, res, next) => {
    try {
        const { token } = req.body;
        if (!token) return res.sendStatus(401);

        const result = jwt.verify(token, secret);
        console.log(result)
        return next();
    } catch(err) {
        console.error(err);
        return res.sendStatus(401);
    }
}

app.get('/', middleware1, (req, res) => {
    return res.send(req.user);
})

app.post('/login', (req, res) => {
    const { login, pass } = req.body;
    const isCredentialsValid = login === 'Stas' && pass === 'awesome';
    if (!isCredentialsValid) return res.sendStatus(401);

    const id = 1234567;
    const lastName = 'Vozniuk';

    const token = jwt.sign({ id, lastName }, secret);
    return res.send(token);
})

app.post('/create-user', auth, (req, res) => {
    res.send('allowed');
})

app.use((err, req, res, next) => {
    res.send('oops')
})

app.listen(3001);