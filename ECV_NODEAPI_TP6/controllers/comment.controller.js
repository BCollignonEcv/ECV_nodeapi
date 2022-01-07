const models = require("../models");
const Comment = models.comment;

module.exports = {
    getComments: (req, res) => {
        res.status(302).send("All comment")
    },
    getComment: (req, res) => {
        res.status(302).send(`comment id : ${req.params.id}`)
    },
    createComment: (req, res) => {
        res.status(201).send(`Create comment`)
    },
    deleteComment: (req, res) => {
        res.status(202).send(`Delete comment id : ${req.params.id}`)
    }
}