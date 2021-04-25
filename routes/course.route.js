const { Router } = require("express");
const Controller = require('../controllers/course.controller')

const router = Router();
const controller = new Controller()

router.post("/", controller.createCourse)
router.put("/", controller.updateCourse)
router.delete('/:id', controller.deleteCourse)
router.get("/:id", controller.getCourseById)
router.get("/", controller.getCourses)

module.exports = router