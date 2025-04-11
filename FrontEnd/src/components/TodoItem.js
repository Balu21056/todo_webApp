import React from 'react';

const TodoItem = ({ todo, onMarkComplete, onDelete, onUpdate }) => {
    const handleMarkComplete = () => {
        if (todo.completed) {
            alert('Task is already marked as complete.');
            return;
        }
        
        // Confirmation for marking the task as complete
        const confirmComplete = window.confirm("Are you sure you want to mark this task as complete? You can't unmark it.");
        if (confirmComplete) {
            onMarkComplete(todo._id);
        }
    };

    const handleDelete = () => {
        // Confirmation prompt before deletion
        const confirmDelete = window.confirm('Are you sure you want to delete this task? This action cannot be undone.');
        if (confirmDelete) {
            onDelete(todo._id);
        }
    };

    return (
        <div className="todo-item">
            <div className="todo-info">
                {/* Checkbox for marking as complete */}
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={handleMarkComplete}
                    className="complete-checkbox"
                />

                {/* Display the task */}
                <span className={`task ${todo.completed ? 'completed' : ''}`}>
                    {todo.task}
                </span>

                {/* Display the deadline below the task */}
                {todo.deadline && (
                    <div className="deadline-container">
                        <span className="deadline">Deadline: {new Date(todo.deadline).toLocaleDateString()}</span>
                    </div>
                )}
            </div>

            <div className="todo-actions">
                {/* Edit Button */}
                <button onClick={() => onUpdate(todo)} className="edit-button">Edit</button>

                {/* Delete Button with confirmation */}
                <button onClick={handleDelete} className="delete-button">Delete</button>
            </div>
        </div>
    );
};

export default TodoItem;