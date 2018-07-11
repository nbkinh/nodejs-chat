let db = require('mongoose');
const config = require('../config/config');

db.connect(config.connectionString).then(
    () => {},
    err => {
        throw err;
    }
);

const User = require('../entities/User')(db);

module.exports = {
    User
};