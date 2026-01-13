const { ProblemModel } = require("../Models/index");

class ProblemsRepo {
  async createProblem(problemData) {
    try {
      const problem = await ProblemModel.create({
        title: problemData.title,
        description: problemData.description,
        difficulty: problemData.difficulty,
        testCases: problemData.testCases ? problemData.testCases : [],
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const allProblems = await ProblemModel.find();
      return allProblems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemsRepo;
