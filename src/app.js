require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('express-async-errors');
const clientsRouter = require('./routers/clientsRouter');
const coursesRouter = require('./routers/coursesRouter');
const ConflictError = require('./errors/ConflictError');
const InexistingId = require('./errors/InexistingId');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/clients', clientsRouter);
app.use('/courses', coursesRouter);

/* eslint-disable-next-line no-unused-vars */
app.use((error, req, res, next) => {
  if (error instanceof ConflictError) return res.status(409).send({ error: 'Conflito de dados.' });
  if( error instanceof InexistingId) return res.status(403).send({error: 'Id does not exists'})
  return res.status(500).json(error);
});

module.exports = app;
