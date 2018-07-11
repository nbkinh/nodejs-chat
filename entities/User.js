module.exports = db => {

    let User;
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
        User = db.model('Message');
    } catch (e) {
        User = db.model('Message', new db.Schema(fields));
    }

    return User;
};