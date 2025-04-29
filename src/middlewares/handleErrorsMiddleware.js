const mongoose = require("mongoose");

const BadRequest = require("../errors/BadRequest");
const MongooseValidationError = require("../database/errors/MongooseValidationError");
const ServerError = require("../errors/ServerError");

const handleErrorsMiddleware = async (error, req, res, next) => {
  if (error instanceof mongoose.Error.CastError) {
    new BadRequest("Data provided is not correct").sendResponse(res);
  }
  if (error instanceof mongoose.Error.ValidationError) {
    new MongooseValidationError(error).sendResponse(res);
  }
  if (error instanceof ServerError) {
    error.sendResponse(res);
  }

  next();
};

module.exports = handleErrorsMiddleware;
