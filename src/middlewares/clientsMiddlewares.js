const signInSchema = require('../schemas/signInSchema');
const signUpSchema = require('../schemas/signUpSchema');

async function signUpMiddleware(req, res, next) {
  const signupValidation = signUpSchema.validate(req.body).error;
  if (signupValidation) {
    return res.status(422).send({
      error: signupValidation.message === 'Senhas diferentes.'
        ? signupValidation.message
        : 'Verifique seus dados.',
    });
  }

  next();
}

async function signInMiddleware(req, res, next) {
  const signInValidation = signInSchema.validate(req.body).error;

  if (signInValidation) {
    return res.status(400).send({ error: 'Verifique os dados enviados.' });
  }

  next();
}

module.exports = {
  signUpMiddleware,
  signInMiddleware,
};
