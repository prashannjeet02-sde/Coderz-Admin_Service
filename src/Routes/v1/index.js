const express = require("express");
const problemIndex = express.Router();
const ProblemRouter = require("./problems.routes");

problemIndex.use("/problems", ProblemRouter);

module.exports = problemIndex;
