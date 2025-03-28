const express = require('express');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use(errorHandler);

module.exports = app;