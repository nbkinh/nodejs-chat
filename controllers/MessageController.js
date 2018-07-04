var Message = require('../models/Message');

module.exports.index = function(req, res) {
    Message.find({}, function(err, data) {
        if (err) {
            throw err;
        }

        res.json(data);
    });
};

module.exports.create = function(req, res) {
    let data = req.body;
    Message(data).save(function(err, data) {
        if (err) {
            throw err;
        }

        res.json({
            'status' : 1,
            'message' : 'Create successfully'
        });
    });
}