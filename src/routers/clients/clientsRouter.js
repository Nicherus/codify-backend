const express = require('express');

const router = express.Router();

const usersController = require('../../controllers/usersController');
const clientsMiddlewares = require('../../middlewares/clientsMiddlewares');
const authMiddleware = require('../../middlewares/authMiddleware');

router.post('/signup', clientsMiddlewares.signUpMiddleware, async (req, res) => {
  await usersController.postSignUp(req.body);
  return res.sendStatus(201);
});

router.post('/signin', clientsMiddlewares.signInMiddleware, async (req, res) => {
  const user = await usersController.postSignIn(req.body, 'CLIENT');
  return res.status(200).send(user);
});

module.exports = router;
