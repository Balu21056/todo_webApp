import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onMarkComplete, onDelete, onUpdate }) {
    return (
        <div>
            {todos && todos.length > 0 ? (
                todos.map((todo) => (
                    <TodoItem
                        key={todo._id}
                        todo={todo}
                        onMarkComplete={onMarkComplete}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                    />
                ))
            ) : (
                <p>No tasks available</p>
            )}
        </div>
    );
}

export default TodoList;
