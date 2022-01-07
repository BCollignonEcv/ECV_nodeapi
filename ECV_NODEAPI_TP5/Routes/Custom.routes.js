var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send("Welcome on ECV_NODEAPI_TP5")
})

router.get('/hello-world', (req, res) => {
    res.json({message: "Hello world"});
})

router.get('/message', (req, res) => {
    const msg = req.query.message;
    if(msg.length < 20){
        res.send(msg)
    }else{
        res.status(404).json({message: "Bad Request"});
    }
})

router.post('/infos/headers', (req, res) => {
    res.json(req.headers)
})

router.post('/isOld', (req, res) => {
    if(req.body.birthdate && req.body.firstname){
        if(utils.getAge(req.body.birthdate) > 18){
            res.json({message: `Welcome ${req.body.firstname}`})
        }else{
            res.status(403).json({message: "Forbidden"})
        }
    }else{
        res.json({message: "Bad Request"})
    }
})

router.get('/rick-roll', (req, res) => {
    res.redirect("https://youtu.be/dQw4w9WgXcQ")
})

router.delete('/custom-header', (req, res) => {
    res.json({message: `Hello World`})
})

module.exports = router;
