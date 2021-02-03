const express = require('express');

const router = express.Router();

const usersRouter = require('./usersRouter');
const coursesRouter = require('./coursesRouter');

router.use('/users', usersRouter);
router.use('/courses', coursesRouter);

module.exports = router;
