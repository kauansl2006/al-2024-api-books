const BadRequest = require("../../errors/BadRequest");

class MongooseValidationError extends BadRequest {
  constructor(error) {
    const errorMessages = Object.values(error.errors)
      .map((error) => error.message)
      .join("; ");

    super(`Validation Errors found: ${errorMessages}`);
  }
}

module.exports = MongooseValidationError;
