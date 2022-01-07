var express = require('express');
var router = express.Router();

const handler = require('../Handlers/users.handler');

router.get('/', handler.getUsers)
router.get('/:id', handler.getUser)
router.post('/:id', handler.createUser)
router.delete('/:id', handler.deleteUser)

module.exports = router;

