const express = require("express");

const logger = require("morgan");
const mongoose = require("mongoose");

const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require('./models');

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Changed this
app.use(express.static(path.join(__dirname, "/public")));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewURLParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

require("./routes/html-routes")(app);
require("./routes/api-routes")(app);


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});