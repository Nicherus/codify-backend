const joi = require('joi');

const signUpSchema = joi.object({
  name: joi.string().min(3).max(255).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).max(255).required(),
  confirmPassword: joi.any().valid(joi.ref('password')).required().messages({
    'any.only': 'Senhas diferentes.',
  }),
});

module.exports = signUpSchema;
