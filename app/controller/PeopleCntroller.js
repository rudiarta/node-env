const service = require('../services/movePeople');

exports.home = async (req,res) => {
    try{
        service.showname('Test Service');
        var a = await service.getAllProvince();
        await service.addItem("arta");
        res.send(a);
    }catch(err){
        console.log('error: ',err);
        res.send('error');
    }
}

exports.man = (req,res) => {
    //https://attacomsian.com/blog/uploading-files-nodejs-express
    console.log(req.files);
    console.log(req.params);
    service.showname('Test Service');
    res.status(422);
    res.send(req.body);
}

exports.women = (req,res) => {
    service.showname('Test Service');
    res.send('Hello women');
}