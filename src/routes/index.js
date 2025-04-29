const bookRoute = require("./bookRoute");
const authorRoute = require("./authorRoute");
const publisherRoute = require("./publisherRoute");

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Hello World"));

  app.use("/books", bookRoute);
  app.use("/authors", authorRoute);
  app.use("/publishers", publisherRoute);
};

module.exports = routes;
