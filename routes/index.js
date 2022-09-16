const routes = require('express').Router();
const {showPersonName} = require("../controllers/contacts.controllers.js")

routes.get ('/', showPersonName )
//> {
    //res.send("Hello, Anita! You are so beautiful!!")
//});

module.exports = routes;