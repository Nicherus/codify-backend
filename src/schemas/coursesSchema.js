const joi = require('joi');

const postCoursesSchema = joi.object({
  name: joi.string().min(3).max(255).required(),
  image: joi.string().uri().required(),
  description: joi.string().required(),
  topics: joi.array().items(joi.object({
    name: joi.string().required(),
  })).required(),
});

module.exports = {
  postCoursesSchema,
};
