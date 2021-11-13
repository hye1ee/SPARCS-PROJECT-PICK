const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        name : String,
        size : { type : Number, default : 10},
        data : { type : Array , default : []},
        gallery : { type : Number, default : 0 }

    },{timestamps : true}
);
const galleryModel = mongoose.model('gallery',schema);

module.exports = galleryModel;