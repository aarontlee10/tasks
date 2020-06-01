const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const photoSchema = new Schema({
    uri: {type: String, required: true},
},{
    timestamps: true,
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;