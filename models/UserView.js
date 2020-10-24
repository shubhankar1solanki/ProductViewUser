"use strict";

const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

let userViewSchema = new Schema({
    userId: String,
    productId: String,
    viewDate: Date
});

module.exports = mongoose.model("userView", userViewSchema);