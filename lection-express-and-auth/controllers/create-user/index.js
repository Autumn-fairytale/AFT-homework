const { calculate } = require('./helpers');
const auth = require('../../middlewares/auth');

module.exports.set = (app) => {
    app.post('/create-user', auth, (req, res, next) => {
        calculate();
    })
}

module.exports = createUserr;