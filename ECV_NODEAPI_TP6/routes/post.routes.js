var express = require('express');
var router = express.Router();

const controller = require('../controllers/post.controller');

router.get('/', controller.getUsers)
router.get('/:id', controller.getUser)
router.post('/', controller.createUser)
router.delete('/:id', controller.deleteUser)

module.exports = router;