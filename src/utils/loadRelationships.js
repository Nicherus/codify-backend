const Course = require('../models/Course');
const CourseUser = require('../models/CourseUser');
const User = require('../models/User');

Course.belongsToMany(User, { through: CourseUser });
User.belongsToMany(Course, { through: CourseUser });
