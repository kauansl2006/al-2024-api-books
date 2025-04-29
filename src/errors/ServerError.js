class ServerError extends Error {
  constructor(message = "Internal Server Error", statusCode = 500) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }

  sendResponse = (res) => {
    res.status(this.statusCode).json({
      message: this.message,
      status: this.statusCode,
    });
  };
}

module.exports = ServerError;
