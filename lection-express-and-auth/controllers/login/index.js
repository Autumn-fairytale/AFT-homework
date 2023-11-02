const { calculate } = require('./helpers');

module.exports.set = (app) => {
    app.post('/login', (req, res, next) => {
        calculate();
    })
}

module.exports = createUserr;