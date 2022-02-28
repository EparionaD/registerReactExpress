const express = require('express');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(cors());
app.use(express.json());

app.use('/', require('./routers/index.routes'));

module.exports = app;
