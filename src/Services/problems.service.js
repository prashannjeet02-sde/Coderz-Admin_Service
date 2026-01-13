const { DataSanitizer } = require("../Utils/index");

class ProblemService {
  constructor(repository) {
    this.repository = repository;
  }

  async createProblem(problemData) {
    try {
      problemData.description = DataSanitizer(problemData.description);
      const addProblem = await this.repository.createProblem(problemData);
      return addProblem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const getProblems = await this.repository.getAllProblems();
      return getProblems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemService;
