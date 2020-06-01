const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: false},
    username: {type: String, required: true, unique: true},
    profilePicId: {type: Schema.Types.ObjectId, ref: Photo},
},{
    timestamps: true,
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;