const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const routesV1 = require('./app/routes/routesV1');
const app = express();
require('dotenv').config();

//CORS
var corsOptions = {
    origin: process.env.ORIGIN
  };
app.use(cors(corsOptions));
  
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//Routes initialize
app.use('/v1', routesV1);

//App start listen on port 3000
app.listen(process.env.PORT);