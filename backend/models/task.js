const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    duedate: Date,
    status: String,
    assignedUser: String
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;