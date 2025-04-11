const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    deadline: {                // New field for task deadline
        type: Date,
        required: false,       // Make it optional
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
