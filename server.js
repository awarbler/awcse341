
const express= require('express');
const app = express()
const port = 3000

app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// const express = require( 'express');
// const bodyParser = require ('body-parser') ;
// const mongodb = require('./db/connect') ;
// E
// const port = process. env. PORT | | 8080;
// const app =
// express();
// app
// •use (bodyParser.json())
// .use((reg, res,
// next)
// {
// res.setHeader( 'Access-Control-Allow-Origin', '*') ;
// nextO);
// 1)
// .use('/', require('./routes')) ;
// mongodb.initDb((err)
// =
// - {
// if (err) {
// console. log(err);
// I else f
// app. listen (port);
// console. log("
// "Connected to DB and listening on $(port}
// -*);
// }
// });