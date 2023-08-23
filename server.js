const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require("./middleware/errorHandler");
const connectDb = require('./config/dbConnection');

const app = express();
const port = process.env.PORT || 5000;

connectDb();
app.use(express.json()) 

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/usersRoutes"));

app.use(errorHandler);

app.listen(port, () => {
    console.log("Listening on port:", port);
});