const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const kernel = express();
require('dotenv').config();

// enable files upload
kernel.use(fileUpload({
  createParentPath: true
}));

//add other middleware
kernel.use(cors());
kernel.use(bodyParser.json());
kernel.use(bodyParser.urlencoded({extended: true}));
kernel.use(morgan('dev'));

module.exports = kernel;