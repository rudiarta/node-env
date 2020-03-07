const routesV1 = require('./v1/routesV1');
const app = require('../../config/kernel');

//Routes versioning initialize
app.use('/v1', routesV1);

module.exports = app;