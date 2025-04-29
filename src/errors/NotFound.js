const ServerError = require("./ServerError");

class NotFound extends ServerError {
  constructor(message = "Resource Not Found", statusCode = 404) {
    super(message, statusCode);
  }
}

module.exports = NotFound;
