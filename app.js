const express = require('express');
const people = require('./app/routes/people');
const app = express();

//Routes initialize
app.use('/', people);

//App start listen on port 3000
app.listen('3000');