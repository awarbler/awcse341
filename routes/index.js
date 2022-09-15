const routes = require('express').Router();

routes.get ('/', (req,res) => {
    res.send("Hello, Anita! You are so beautiful!!")
});

module.exports = routes;