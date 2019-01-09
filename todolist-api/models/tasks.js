var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tasksSchema = new Schema({
    title : String,
    description : String,
    todo_status : { type: Boolean, default: true }, //true : steel need to attend the task., false: task completed
    created_at : { type: Date, default: Date.now }
})

module.exports = mongoose.model('tasks', tasksSchema);