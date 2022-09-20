const express= require('express');

const connectDB = require('./DB/connect');
const app = express();


connectDB();
const port = process.env.Port || 3000


app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})