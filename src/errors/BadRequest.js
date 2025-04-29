const ServerError = require("./ServerError");

class BadRequest extends ServerError {
  constructor(message = "Client Side Error", statusCode = 400) {
    super(message, statusCode);
  }
}

module.exports = BadRequest;
