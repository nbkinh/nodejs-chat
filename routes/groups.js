var express = require('express');
var router = express.Router();
var groupsController = require('../controllers/GroupsController');

router.get('/', groupsController.index);

module.exports = router;