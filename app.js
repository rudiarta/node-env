const express = require('express');
const routesV1 = require('./app/routes/routesV1');
const app = express();
require('dotenv').config();

//Routes initialize
app.use('/v1', routesV1);

//App start listen on port 3000
app.listen(process.env.PORT);