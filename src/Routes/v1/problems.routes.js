const { ProblemController } = require("../../Controllers/index");
const express = require("express");
const problemRouter = express.Router();

problemRouter.get("/ping", ProblemController.testController);

problemRouter.post("/", ProblemController.addProblem);

module.exports = problemRouter;
