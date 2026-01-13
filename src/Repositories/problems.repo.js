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

  async getProblem(id) {
    try {
      const problem = await ProblemModel.findById(id);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateProblem(id, data) {
    try {
      const modifyProblem = await ProblemModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      return modifyProblem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteProblem(id) {
    try {
      await ProblemModel.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemsRepo;
