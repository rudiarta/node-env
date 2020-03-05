const express = require('express');
const routes = require('./app/route/routesV1');
const app = express();

//Routes initialize
app.use('/v1', routes);

//App start listen on port 3000
app.listen('3000');