const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const errorHandler = require('./util/error-handler');

require('./models/register-plugin');

app.use(morgan('dev'));
app.use(cors());
// app.use(sslRedirect());

const albums = require('./routes/albums');


app.use(express.json());

app.use('/albums', albums);

app.use(errorHandler());

module.exports = app;