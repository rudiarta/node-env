const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const routesV1 = require('./app/routes/routesV1');
const multer = require('multer');
const upload = multer();
const app = express();
require('dotenv').config();

//CORS
var corsOptions = {
    origin: process.env.ORIGIN
  };
app.use(cors(corsOptions));
  
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

//Routes initialize
app.use('/v1', routesV1);

//App start listen on port 3000
app.listen(process.env.PORT);