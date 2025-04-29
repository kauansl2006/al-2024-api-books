const express = require("express");
const routes = require("./routes");
const middlewares = require("./middlewares");

const db = require("./database/dbConnect");

db.on("error", (error) => console.log("Database connection error!", error));
db.on("open", () => console.log("Database connection open!"));

const app = express();
app.use(express.json());
routes(app);
middlewares(app);

module.exports = app;
