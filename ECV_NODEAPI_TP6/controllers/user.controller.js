module.exports = {
    getUsers: (req, res) => {
        res.status(302).send("All Users")
    },
    getUser: (req, res) => {
        res.status(302).send(`User id : ${req.params.id}`)
    },
    createUser: (req, res) => {
        res.status(201).send(`Create user`)
    },
    deleteUser: (req, res) => {
        res.status(202).send(`Delete user id : ${req.params.id}`)
    }
}