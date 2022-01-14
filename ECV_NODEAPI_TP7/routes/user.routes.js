var express = require('express');
var router = express.Router();
const basicSchemas = require('../schemas/schemas');
const userSchema = require('../schemas/user.schemas');
const validator = require('express-joi-validation').createValidator({})
const controller = require('../controllers/user.controller');

router.get('/', controller.getUsers)
router.get('/:id', validator.params(basicSchemas.idSchema), controller.getUser)
router.post('/', validator.body(userSchema.create), controller.createUser)
router.patch('/:id', validator.params(basicSchemas.idSchema), validator.body(userSchema.update), controller.updateUser)
router.delete('/:id', controller.deleteUser)

module.exports = router;