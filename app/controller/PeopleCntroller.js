const service = require('../services/movePeople');

exports.home = (req,res) => {
    name = service.showname('Test Service');
    res.send('Hello people');
}

exports.man = (req,res) => {
    name = service.showname('Test Service');
    res.send('Hello man');
}

exports.women = (req,res) => {
    name = service.showname('Test Service');
    res.send('Hello women');
}