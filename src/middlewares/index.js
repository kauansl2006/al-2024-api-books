const handleErrorsMiddleware = require("./handleErrorsMiddleware");

const middlewares = (app) => {
  app.use(handleErrorsMiddleware);
};

module.exports = middlewares;
