const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        name : String,
        comment : String,
        size : { type : Number, default : 5},
        data : { type : Array , default : []}

    },{timestamps : true}
);
const pixelModel = mongoose.model('pixel',schema);

module.exports = pixelModel;