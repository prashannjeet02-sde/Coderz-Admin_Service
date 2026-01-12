const express = require("express");
const v1 = express.Router();
const v1Router = require("./v1/index");

v1.use("/v1", v1Router);

module.exports = v1;
