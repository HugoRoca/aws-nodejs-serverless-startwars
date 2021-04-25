const Service = require("../services/course.service");

const service = new Service();

class Course {
  async createCourse(req, res) {
    try {
      const { course, description, price } = req.body;
      const response = await service.createCourse(course, description, price);

      res.json(response);
    } catch (error) {
      res.status(500).send("Something broke!");
    }
  }

  async updateCourse(req, res) {
    try {
      const { course, description, price, id } = req.body;
      const response = await service.updateCourse(
        course,
        description,
        price,
        id
      );

      res.json(response);
    } catch (error) {
      res.status(500).send("Something broke!");
    }
  }

  async deleteCourse(req, res) {
    try {
      const { id } = req.params;
      const response = await service.deleteCourse(id);

      res.json(response);
    } catch (error) {
      res.status(500).send("Something broke!");
    }
  }

  async getCourseById(req, res) {
    try {
      const { id } = req.params;
      const response = await service.getCourseById(id);

      res.json(response);
    } catch (error) {
      res.status(500).send("Something broke!");
    }
  }

  async getCourses(req, res) {
    try {
      const response = await service.getCourses();
      res.json(response);
    } catch (error) {
      res.status(500).send("Something broke!");
    }
  }
}

module.exports = Course;
