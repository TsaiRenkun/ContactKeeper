const express = require('express');
const router = express.Router();

// @route GET api/contacts
// @desc Get all user's contacts
// @access Private

router.get('/', (req, res) => {
    res.send("Get all contacts");
});


// @route POST api/contacts
// @desc add new contacts
// @access Private

router.post('/', (req, res) => {
    res.send("Add new contact");
});


// @route PUT api/contacts/:id
// @desc Update contact
// @access Private

router.put('/', (req, res) => {
    res.send("update Contact");
});


// @route DELETE api/contacts
// @desc Delete contact
// @access Private

router.delete('/', (req, res) => {
    res.send("Delete contact");
});

module.exports = router;