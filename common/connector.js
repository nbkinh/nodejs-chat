let db = require('mongoose');
db.connect('mongodb://admin:admin123@ds161700.mlab.com:61700/chat_demo').then(
    () => {},
    err => {
        throw err;
    }
);

module.exports = db;