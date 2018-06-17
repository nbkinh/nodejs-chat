var express = require('express');
var router = express.Router();
var loginController = require('../controllers/LoginController');

/* GET home page. */
router.get('/', loginController.index);

router.post('/register', loginController.register);

module.exports = router;
