const express = require('express');
const app = express();
require('dotenv').config();
const port =  process.env.PORT || 3000;
require('./database');
const usersRouter = require('./routes/users');

app.use(express.json());
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});