const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Datebase Connected")
        console.log(connect.connection.host, connect.connection.name)
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = connectDb;