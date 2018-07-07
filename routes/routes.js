const express = require('express');
const router = express.Router();
const messageController = require('../controllers/MessageController');

const validator = function(req, res, next) {
    // Check access token
    return next();
};

router.get('/message', validator, messageController.index);
router.post('/message', validator, messageController.create);
router.get('/message/:id', validator, messageController.detail);

module.exports = router;
