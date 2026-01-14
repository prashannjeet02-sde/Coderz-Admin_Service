const { BaseError } = require("../errors/index");

function errorHandler(err, req, res, next) {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      name: err.name,
      message: err.message,
      data: {},
    });
  } else {
    return res.status(500).json({
      success: false,
      name: "Internal Server Error",
      message: "Something Went Wrong",
      data: {},
    });
  }
}

module.exports = errorHandler;
