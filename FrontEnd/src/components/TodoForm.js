import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoForm = ({ fetchTodos, editingTodo, updateTodo, setEditingTodo }) => {
    const [task, setTask] = useState('');
    const [deadline, setDeadline] = useState('');
    const [error, setError] = useState('');

    // Populate form fields if in edit mode
    useEffect(() => {
        if (editingTodo) {
            setTask(editingTodo.task);
            setDeadline(editingTodo.deadline || '');
        } else {
            setTask('');
            setDeadline('');
        }
        setError(''); // Clear error when switching to edit mode
    }, [editingTodo]);

    const handleAdd = async () => {
        if (!task.trim()) {
            setError('Please enter a task.');
            return;
        }

        if (!isNaN(task.trim())) {
            setError('Task name should not contain only numbers.');
            return;
        }

        if (!deadline) {
            setError('Please select a deadline.');
            return;
        }

        const today = new Date();
        const selectedDate = new Date(deadline);
        if (selectedDate < today) {
            setError('Deadline must be a future date.');
            return;
        }

        try {
            await axios.post('http://localhost:5000/api/todos', { task, deadline });
            setTask('');
            setDeadline('');
            fetchTodos();
            setError(''); // Clear error after successful add
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    const handleUpdate = async () => {
        if (!task.trim()) {
            setError('Please enter a task.');
            return;
        }

        if (!isNaN(task.trim())) {
            setError('Task name should not contain only numbers.');
            return;
        }

        if (!deadline) {
            setError('Please select a deadline.');
            return;
        }

        const today = new Date();
        const selectedDate = new Date(deadline);
        if (selectedDate < today) {
            setError('Deadline must be a future date.');
            return;
        }

        if (editingTodo) {
            try {
                await updateTodo(editingTodo._id, { task, deadline });
                setEditingTodo(null); // End editing mode
                setTask(''); // Clear fields after update
                setDeadline('');
                fetchTodos();
                setError(''); // Clear error after successful update
            } catch (error) {
                console.error("Error updating task:", error);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editingTodo ? handleUpdate() : handleAdd();
    };

    const cancelEdit = () => {
        setEditingTodo(null);  // Cancel editing mode
        setTask('');  // Clear form fields
        setDeadline('');
        setError(''); // Clear error when editing is cancelled
    };

    const handleInputChange = (setter, value) => {
        setter(value);
        setError(''); // Clear error on any input change
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={task}
                onChange={(e) => handleInputChange(setTask, e.target.value)}
                placeholder="Add a new task"
                required
                className="task-input"
            />
            <input
                type="date"
                value={deadline}
                onChange={(e) => handleInputChange(setDeadline, e.target.value)}
                placeholder="Deadline"
                className="deadline-input"
            />
            {editingTodo ? (
                <>
                    <button type="submit" className="save-button">Save</button>
                    <button type="button" onClick={cancelEdit} className="cancel-button">Cancel</button>
                </>
            ) : (
                <button type="submit" className="add-button">Add</button>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default TodoForm;
