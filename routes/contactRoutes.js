const express = require("express");
const router = express.Router();
const {
    getAllContacts,
    getOneContact,
    insertContact,
    updateContact,
    deleteContact
} = require("./../controllers/contactController")

router.route("/").get(getAllContacts);

router.route("/:id").get(getOneContact);

router.route("/").post(insertContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;