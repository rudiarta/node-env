const provinceRepository = require('../repository/provinceRepository');

exports.showname = (name) => console.log(name);

exports.getAllProvince = async () => {
    var a = new provinceRepository();
    return a.getAllItem();
};

exports.addItem = async (name) => {
    var a = new provinceRepository();
    a.addItem(name);
};

exports.hello = (name) => {return name};