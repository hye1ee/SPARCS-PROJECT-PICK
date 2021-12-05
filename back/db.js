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

function remove(name, callback){
    pixelModel.deleteOne({name:name},(error)=>{
        if(error){
            console.log('error');
        }else{
            callback();
        } 
    });
}

function check(name, callback){
    pixelModel.findOne({name:name},(error, result)=>{
        if(error){
            console.log('error');
            callback([]);
        }else{
            callback(result);
        }
    })
}

module.exports = {
    getAll,
    add,
    remove,
    check
};
