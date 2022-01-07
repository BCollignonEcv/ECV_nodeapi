module.exports = {
    getUsers: (req, res) => {
        res.status(302).send("All post")
    },
    getUser: (req, res) => {
        res.status(302).send(`post id : ${req.params.id}`)
    },
    createUser: (req, res) => {
        res.status(201).send(`Create post`)
    },
    deleteUser: (req, res) => {
        res.status(202).send(`Delete post id : ${req.params.id}`)
    }
}