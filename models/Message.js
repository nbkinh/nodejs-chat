let db = require('../common/connector');

let Message;
let fields = {
    user_name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    time: String
};
try {
    Message = db.model('Message');
} catch (e) {
    Message = db.model('Message', new db.Schema(fields));
}

module.exports = Message;