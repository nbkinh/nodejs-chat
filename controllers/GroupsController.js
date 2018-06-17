var Message = require('../models/Message');

module.exports.index = function(req, res) {
    Message.find({}, function(err, data) {
        if (err) {
            throw err;
        }

        res.render('group', {user_name: req.query.u, groupsMessages: data});
    });
};