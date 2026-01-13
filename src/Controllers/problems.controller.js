const { ProblemService } = require("../Services/index");
const { ProblemRepo } = require("../Repositories/index");

const problemServcie = new ProblemService(new ProblemRepo());

async function testController(req, res) {
  try {
    return res.json({ message: "Controller flow is working" });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function addProblem(req, res) {
  try {
    const incomingData = req.body;
    const newProblem = await problemServcie.createProblem(incomingData);
    return res.status(201).json({
      success: true,
      message: "New Problem Created",
      data: newProblem,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = { testController, addProblem };
