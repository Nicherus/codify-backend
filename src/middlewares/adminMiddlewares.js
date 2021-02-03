const signInSchema = require('../schemas/signInSchema');

async function signInMiddleware(req, res, next) {
  const signInValidation = signInSchema.validate(req.body).error;

  if (signInValidation) {
    return res.status(400).send({ error: 'Verifique os dados enviados.' });
  }

  next();
}

module.exports = {
  signInMiddleware,
};
