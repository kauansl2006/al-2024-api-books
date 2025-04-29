const mongoose = require("mongoose");

let db;

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI);

db = mongoose.connection;

module.exports = db;
