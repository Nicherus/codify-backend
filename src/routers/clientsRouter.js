const express = require('express');

const router = express.Router();

const signupSchema = require('../schemas/signupSchema');
const usersController = require('../controllers/usersController');

router.post('/signup', async (req, res) => {
  const signupValidation = signupSchema.validate(req.body).error;
  if (signupValidation) {
    return res.status(422).send({
      error: signupValidation.message === 'Senhas diferentes.'
        ? signupValidation.message
        : 'Verifique seus dados.',
    });
  }
  await usersController.postSignup(req.body);
  return res.sendStatus(201);
});

module.exports = router;
