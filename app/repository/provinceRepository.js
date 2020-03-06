const Province = require('../models/Province');

// the defined model is the class itself
// console.log(Province === sequelize.models.Province); // true

async function test(){
    pro = await Province.findAll({
    attributes: ['id', 'name']
    });
    result = JSON.stringify(pro, null, 2);
    return result;
}

module.exports.test = test;