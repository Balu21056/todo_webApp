const express = require('express');
const Todo = require('../models/Todo');

const router = express.Router();

// Create a new To-do
router.post('/', async (req, res) => {
    try {
        const newTodo = new Todo({
            task: req.body.task,
            deadline: req.body.deadline || null,  // Save the deadline if provided
        });
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a To-do by ID
router.put('/:id', async (req, res) => {
    try {
        const { task, deadline } = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            { task, deadline },
            { new: true }
        );

        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(200).json(updatedTodo);
    } catch (error) {
        console.error("Error in PUT /:id route:", error);
        res.status(400).json({ message: error.message });
    }
});

// Get all To-dos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a To-do by ID
router.delete('/:id', async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Search for To-dos by query
router.get('/search/:query', async (req, res) => {
    try {
        const searchQuery = req.params.query;
        const todos = await Todo.find({ task: { $regex: searchQuery, $options: 'i' } }); // Case-insensitive search
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Mark a To-do as Completed
router.patch('/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, { completed: true }, { new: true });
        res.status(200).json(todo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
