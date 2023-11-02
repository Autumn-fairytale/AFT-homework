module.exports.set = (app) => {
    require('./create-user').set(app);
    require('./login').set(app);
}