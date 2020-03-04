const express = require('express');

const app = express();

//Routes
app.get('/', (req,res) => {
    res.send('Hello World');
});

//App start listen on port 3000
app.listen('3000');