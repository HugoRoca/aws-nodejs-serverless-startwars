const Repository = require("../repositories/course.repository");
const repository = new Repository();

class CourseService {
  async createCourse(course, description, price) {
    return await repository.createCourse(course, description, price);
  }

  async updateCourse(course, description, price, id) {
    return await repository.updateCourse(course, description, price, id);
  }

  async deleteCourse(id) {
    return await repository.deleteCourse(id);
  }

  async getCourseById(id) {
    return await repository.getCourseById(id);
  }

  async getCourses() {
    const data = await repository.getCourses();
    return data.Items;
  }
}

module.exports = CourseService;
