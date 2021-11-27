const pixelModel = require('./pixelmodel');

function getAll(callback){
    pixelModel.find({},(error, result) => {
        if(error){
            console.log(error);
            callback([]);
        }else{
            callback(result);
        }
    });
}

function add(name, comment, size, data, callback){
    const newItem = new pixelModel({
        name,
        comment,
        size,
        data
    });
    newItem.save((error, result)=>{
        callback(result);
    });
}

module.exports = {
    getAll,
    add
};
