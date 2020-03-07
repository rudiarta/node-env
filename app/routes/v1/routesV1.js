const express = require('express');
const middleware = require('../../middleware/AuthMiddleware');
const peopleController = require('../../controller/PeopleCntroller');
const router = express.Router();

//Global Middleware initialize
router.use((req,res,next) => {
    middleware.auth('Global Middleware');
    next();
});

//Specific Route middleware
router.use('/women', (req,res,next) => {
    middleware.auth('Middleware women');
    next();
});

//Routes
router.get('/', (req,res) => peopleController.home(req,res));
router.post('/man/:id', (req,res) => peopleController.man(req,res));
router.get('/women', (req,res) => peopleController.women(req,res));

module.exports = router;
