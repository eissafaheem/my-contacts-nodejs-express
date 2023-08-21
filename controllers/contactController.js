const asyncHandler = require("express-async-handler");

// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getAllContacts = asyncHandler((req, res) => {
    res.status(200).json({ message: "Get all contacts" });
});


// @desc Get one contact
// @route GET /api/contacts
// @access public
const getOneContact = asyncHandler((req, res) => {
    res.status(200).json({ message: "Get one contact " + req.params.id });
});

// @desc Insert one contact
// @route POST /api/contacts
// @access public
const insertContact = asyncHandler((req, res) => {
    console.log("req.body", req.body);

    const {
        name,
        email,
        phone
    } = req.body;

    if (!name && !email && !phone) {
        res.status(404);
        throw new Error("All fields are mandatory !")
    }

    res.status(200).json({ message: "Insert contact" });
});

// @desc Update one contact by id
// @route PUT /api/contacts
// @access public
const updateContact = asyncHandler((req, res) => {
    res.status(200).json({ message: "Update contact " + req.params.id });
});

// @desc Delete one contact by id
// @route DELETE /api/contacts
// @access public
const deleteContact = asyncHandler((req, res) => {
    res.status(200).json({ message: "delete contact " + req.params.id });
});


module.exports = {
    getAllContacts,
    getOneContact,
    insertContact,
    updateContact,
    deleteContact
};