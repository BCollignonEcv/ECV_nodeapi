var express = require('express');
var router = express.Router();

const controller = require('../controllers/comment.controller');

router.get('/', controller.getComments)
router.get('/:id', controller.getComment)
router.post('/', controller.createComment)
router.patch('/:id', controller.updateComment)
router.delete('/:id', controller.deleteComment)

module.exports = router;