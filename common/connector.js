let db = require('mongoose');
const config = require('../config/config');

db.connect(config.db).then(
    () => {},
    err => {
        throw err;
    }
);

module.exports = db;