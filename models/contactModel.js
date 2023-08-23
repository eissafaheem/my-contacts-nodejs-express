const mongoose = require('mongoose');

const contactSchema = mongoose.Schema(
    {
        userId:{
            type: mongoose.Schema.ObjectId,
            required: [
                true,
            ],
            ref: "User"
        },
        name: {
            type: String,
            required: [
                true,
                "Please enter a name"
            ]
        },
        email: {
            type: String,
            required: [
                true,
                "Please enter a email"
            ]
        },
        phone: {
            type: String,
            required: [
                true,
                "Please enter a phone"
            ]
        }
    },
    {
        timeStamp: true
    }
)

module.exports = mongoose.model('Contact', contactSchema);