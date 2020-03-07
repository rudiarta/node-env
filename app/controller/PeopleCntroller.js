const service = require('../services/movePeople');

exports.home = async (req,res) => {
    try{
        service.showname('Test Service');
        var a = await service.getAllProvince();
        await service.addItem("arta");
        res.send(a);
    }catch(err){
        console.log('error: ',err);
        res.status(403);
        res.send('error');
    }
}

exports.man = (req,res) => {
    //https://attacomsian.com/blog/uploading-files-nodejs-express
    try {
        console.log(req.files);
        console.log(req.params);

        let file = req.files.asd;
        service.addFile(file);
        service.showname('Test Service');
        res.status(200);
        res.send(req.body);
    } catch (error) {
        console.log('error: ',error);
        res.status(403);
        res.send('error');
    }
}

exports.women = async (req,res) => {
    try {
        service.showname('Test Service');
        var a = await service.getAllProvinceRaw();
        res.status(200);
        res.send({
            massage: "hello women",
            result: a
        });
    } catch (error) {
        console.log('error: ',error);
        res.status(403);
        res.send('error');
    }
}