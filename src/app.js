require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('express-async-errors');

const app = express();

const clientsRouter = require('./routers/clients/clientsRouter');
const adminRouter = require('./routers/admin/adminRouter');
const ConflictError = require('./errors/ConflictError');
const AuthorizationError = require('./errors/AuthorizationError');

app.use(cors());
app.use(express.json());

app.use('/clients', clientsRouter);
app.use('/admin', adminRouter);

app.use((error, req, res, next) => {
  if (error instanceof ConflictError) return res.status(409).send({ error: 'Conflito de dados.' });
  if (error instanceof AuthorizationError) return res.status(403).send({ error: 'Não autorizado.' });

  return res.status(500).json(error);
});

module.exports = app;
