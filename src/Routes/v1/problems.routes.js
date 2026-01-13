const { ProblemController } = require("../../Controllers/index");
const express = require("express");
const problemRouter = express.Router();

problemRouter.get("/ping", ProblemController.testController);

problemRouter.post("/", ProblemController.addProblem);

problemRouter.get("/", ProblemController.getProblems);

problemRouter.get("/:id", ProblemController.getProblem);

problemRouter.put("/:id", ProblemController.updateProblem);

problemRouter.delete("/:id", ProblemController.removeProblem);

module.exports = problemRouter;
