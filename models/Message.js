let db = require('../common/connector');

let Message;
try {
    Message = db.model('Message');
} catch (e) {
    Message = db.model('Message', new db.Schema({
        user_name: String,
        content: String,
        time: String
    }));
}

module.exports = Message;