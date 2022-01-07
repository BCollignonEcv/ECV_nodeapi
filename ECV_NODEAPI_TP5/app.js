const express = require('express');
const bodyParser = require('body-parser');
const utils = require('./utils')
const customRoutes = require('./Routes/Custom.routes');
const userRoutes = require('./Routes/User.routes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(customRoutes);
app.use('/users', userRoutes);

app.get("/params/:id/:key/:slug", (req, res) => {
    res.json(req.params)
})

app.listen(port, () => {
    console.log(`Server running on : http://localhost:${port}`)
})