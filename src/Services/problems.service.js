const { NotFound } = require("../errors");
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

  async getProblem(id) {
    try {
      const getById = await this.repository.getProblem(id);
      return getById;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateProblem(id, data) {
    try {
      const modify = await this.repository.updateProblem(id, data);
      return modify;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteProblem(id) {
    try {
      const remove = await this.repository.deleteProblem(id);
      if (!remove) {
        throw new NotFound(`Problem with id:${id} not found`);
      }
      return remove;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProblemService;
