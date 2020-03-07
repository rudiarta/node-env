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

exports.addFile = (file) => {
    //Use the mv() method to place the file in upload directory (i.e. "uploads")
    file.mv('./storage/image/' + Math.random() + file.name);
}

exports.hello = (name) => {return name};