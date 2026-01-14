const BaseError = require("./base.error");

class NotFound extends BaseError {
  constructor(message = "Resource not Found") {
    super("NotFound", 404, message);
  }
}

module.exports = NotFound;
