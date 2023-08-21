const express = require("express");
const router = express.Router();
const {
    getAllContacts,
    getOneContact,
    insertContact,
    updateContact,
    deleteContact
} = require("./../controllers/contactController")

router.route("/").get(getAllContacts).post(insertContact);
router.route("/:id").get(getOneContact).put(updateContact).delete(deleteContact);

module.exports = router;