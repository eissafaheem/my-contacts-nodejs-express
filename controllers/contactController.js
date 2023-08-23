const asyncHandler = require("express-async-handler");
const Contact = require("./../models/contactModel");

// @desc Get all contacts
// @route GET /api/contacts
// @access private
const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ userId: req.user._id });
    res.status(200).json(contacts);
});


// @desc Get one contact
// @route GET /api/contacts
// @access private
const getOneContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

// @desc Insert one contact
// @route POST /api/contacts
// @access private
const insertContact = asyncHandler(async (req, res) => {

    const {
        name,
        email,
        phone
    } = req.body;

    if (!name || !email || !phone) {
        res.status(404);
        throw new Error("All fields are mandatory !")
    }

    const contact = await Contact.create({
        userId: req.user._id,
        name,
        email,
        phone
    });

    res.status(200).json(contact);
});

// @desc Update one contact by id
// @route PUT /api/contacts
// @access private
const updateContact = asyncHandler(async (req, res) => {
    const {
        name,
        email,
        phone
    } = req.body;

    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    
    if (contact.userId.toString() != req.user._id) {
        res.status(403);
        throw new Error("Users are not allowed to alter other users contacts !");
    }

    if (!name || !email || !phone) {
        res.status(404);
        throw new Error("All fields are mandatory !")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        {
            name,
            email,
            phone
        },
        { new: true }
    );

    res.status(200).json(updatedContact);
});

// @desc Delete one contact by id
// @route DELETE /api/contacts
// @access private
const deleteContact = asyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    if (contact.userId.toString() != req.user._id) {
        res.status(403);
        throw new Error("Users are not allowed to alter other users contacts !");
    }

    await Contact.findByIdAndRemove(req.params.id)
    res.status(200).json(contact);
});


module.exports = {
    getAllContacts,
    getOneContact,
    insertContact,
    updateContact,
    deleteContact
};