const express = require('express');
const router = express.Router();
// const { index, show } = require("../controllers/contacts.controller");

const contactsController = require('../controllers/contacts.controller');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

// List a single contact
// router.use("/:id", show);

// List all contacts
// router.use("/", index);

module.exports = router;