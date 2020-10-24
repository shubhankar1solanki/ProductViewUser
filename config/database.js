const Mongoose = require("mongoose");
const url = "mongodb://localhost:27017/exampleDB";

Mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

var db = Mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function callback() {
    console.log("Connection with database succeeded.");
});
