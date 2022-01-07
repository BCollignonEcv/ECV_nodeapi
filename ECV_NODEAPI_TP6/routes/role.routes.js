var express = require('express');
var router = express.Router();

const controller = require('../controllers/role.controller');

router.get('/', controller.getRoles)
router.get('/:id', controller.getRole)
router.post('/', controller.createRole)
router.delete('/:id', controller.deleteRole)

module.exports = router;