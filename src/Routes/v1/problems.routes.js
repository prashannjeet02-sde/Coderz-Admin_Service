const { ProblemController } = require("../../Controllers/index");
const express = require("express");
const problemRouter = express.Router();

problemRouter.get("/ping", ProblemController.testController);

module.exports = problemRouter;
