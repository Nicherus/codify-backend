require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('express-async-errors');
<<<<<<< HEAD
=======

const ConflictError = require('./errors/ConflictError');
const InexistingId = require('./errors/InexistingId');
const AuthorizationError = require('./errors/AuthorizationError');
>>>>>>> ac13074d97b3b602a37f8bbabe593a4f4e55519e

const app = express();
const clientsRouter = require('./routers/clients/clientsRouter');
const clientsCoursesRouter = require('./routers/clients/coursesRouter');
const adminRouter = require('./routers/admin/adminRouter');


app.use(cors());
app.use(express.json());

app.use('/clients', clientsRouter);
<<<<<<< HEAD
=======
app.use('/clients/courses', clientsCoursesRouter);
>>>>>>> ac13074d97b3b602a37f8bbabe593a4f4e55519e
app.use('/admin', adminRouter);

app.use((error, req, res, next) => {
  if (error instanceof ConflictError) return res.status(409).send({ error: 'Conflito de dados.' });
<<<<<<< HEAD
=======
  if (error instanceof InexistingId) return res.status(403).send({ error: 'Id does not exists' });
>>>>>>> ac13074d97b3b602a37f8bbabe593a4f4e55519e
  if (error instanceof AuthorizationError) return res.status(403).send({ error: 'Não autorizado.' });

  return res.status(500).json(error);
});

module.exports = app;
