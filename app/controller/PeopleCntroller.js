const service = require('../services/movePeople');
const provinceRepository = require('../repository/provinceRepository');

exports.home = async (req,res) => {
    name = service.showname('Test Service');
    
    res.send(await provinceRepository.test());
}

exports.man = (req,res) => {
    name = service.showname('Test Service');
    res.send('Hello man');
}

exports.women = (req,res) => {
    name = service.showname('Test Service');
    res.send('Hello women');
}