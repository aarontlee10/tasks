const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {type: String},
    creator: {type: Schema.Types.ObjectId, ref: Person},
    asignee: {type: Schema.Types.ObjectId, ref: Person},
    description: {type: String},
    priority: {type: String},
    progress: {type: String},
    due_date: {type: Date},
    category: {type: String},
},{
    timestamps: true,
});

const Task = mongoose.model('task', taskSchema);

module.exports = Task;