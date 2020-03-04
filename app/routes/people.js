const express = require('express');
const middleware = require('../middleware/AuthMiddleware');
const service = require('../../services/movePeople');
const router = express.Router();

//Middleware intilize
router.use((req,res,next) => {
    middleware.auth('asd');
    next();
});

//Routes
router.get('/', (req,res) => {
    res.send('Hello people');
});

router.get('/man', (req,res) => {
    name = service.showname('rudi');
    res.send('Hello people man ');
});

router.get('/women', (req,res) => {
    res.send('Hello people women');
});

module.exports = router;
