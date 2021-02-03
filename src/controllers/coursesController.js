const Course = require('../models/Course');
const ConflictError = require('../errors/ConflictError');
const InexistingId = require('../errors/InexistingId');

class CoursesController {

    async findCourseByName (name) {
        const course = await Course.findOne({where: {name} });
        return course;
    }

    async create (name) {
        const coursesExists = await this.findCourseByName(name);
        if (coursesExists) throw new ConflictError();

        const course = await Course.create({name});
        return course;
    }

    async listAllCourses () {
        const courses = await Course.findAll();
        return courses;
    }

    async getCourseById (id) {
        const course = await Course.findOne({where: {id}});
        if(!course) throw new InexistingId();

        return course;
    }
}

module.exports = new CoursesController();



