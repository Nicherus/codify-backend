const joi = require('joi');

const postCoursesSchema = joi.object({
  name: joi.string().min(3).max(255).required(),
});

module.exports = {
  postCoursesSchema,
};
