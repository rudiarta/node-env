const provinceRepository = require('../repository/provinceRepository');
const _ = require('lodash');

exports.showname = (name) => {
    console.log(name)
    var a = new provinceRepository();
    a.getRequestAPI();
};

exports.getAllProvince = async () => {
    var a = new provinceRepository();
    return a.getAllItem();
};

exports.addItem = async (name) => {
    var a = new provinceRepository();
    a.addItem(name);
};

exports.getAllProvinceRaw = async () => {
    var a = new provinceRepository();
    var b = await a.rawQuery();
    console.log('sql',b);
    return b;
}

exports.addFile = (file) => {
    //Use the mv() method to place the file in upload directory (i.e. "uploads")
    file.mv('./storage/image/' + Math.random() + file.name);
}

exports.hello = (name) => {return name};