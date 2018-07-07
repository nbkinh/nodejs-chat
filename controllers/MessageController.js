const Message = require('../models/Message');
const ResponseExpress = require('../components/ResponseExpress');

module.exports.index = function(req, res) {
    Message.find({}, function(err, data) {
        ResponseExpress.send(res, data, err);
    });
};

module.exports.create = function(req, res) {
    let data = req.body;
    Message(data).save(function(err, data) {
        ResponseExpress.send(res, data, err);
    });
};

module.exports.detail = function(req, res) {
    let id = req.params.id;
    Message.find({_id: id}, function (err, data) {
        ResponseExpress.send(res, data, err);
    });
};