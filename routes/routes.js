var express = require('express');
var router = express.Router();
var messageController = require('../controllers/MessageController');

var validator = function(req, res, next) {
    // Check access token
    console.log('Check access token');

    return next();
};

router.get('/message', validator, messageController.index);
router.post('/message', validator, messageController.create);

module.exports = router;
