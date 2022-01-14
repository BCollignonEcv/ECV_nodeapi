require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
const commentRoutes = require('./routes/comment.routes');
const roleRoutes = require('./routes/role.routes');

const app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use('/roles', roleRoutes);

app.listen(process.env.SERVER_port, () => {
    console.log(`Server running on : http://localhost:${process.env.SERVER_port}`)
})