import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [editingTodo, setEditingTodo] = useState(null);

    const fetchTodos = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/todos');
            setTodos(response.data);
            setSearchResults([]); // Clear search results when fetching all todos
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/todos/${id}`);
            fetchTodos();
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    const markComplete = async (id) => {
        try {
            await axios.patch(`http://localhost:5000/api/todos/${id}`, { completed: true });
            fetchTodos();
        } catch (error) {
            console.error("Error marking todo complete:", error);
        }
    };

    const updateTodo = async (id, updatedTask) => {
        try {
            console.log("Updating Todo with ID:", id, "and data:", updatedTask);
            await axios.put(`http://localhost:5000/api/todos/${id}`, updatedTask);
            setEditingTodo(null);
            fetchTodos();
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    };

    const startEditing = (todo) => {
        console.log("Start editing:", todo);
        setEditingTodo(todo); // Set the selected todo for editing
    };

    const searchTodos = async () => {
        if (!searchQuery) {
            setSearchResults([]); // Clear search results if query is empty
            return;
        }
        try {
            const response = await axios.get(`http://localhost:5000/api/todos/search/${searchQuery}`);
            setSearchResults(response.data);
        } catch (error) {
            console.error("Error searching todos:", error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className="app-container">
            <h1>To-Do List</h1>
            <div className="form-container">
                <input 
                    type="text" 
                    placeholder="Search tasks..." 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    className="search-input"
                />
                <button onClick={searchTodos} className="search-button">Search</button>
                <TodoForm 
                    fetchTodos={fetchTodos} 
                    editingTodo={editingTodo} 
                    updateTodo={updateTodo} 
                    setEditingTodo={setEditingTodo} 
                />
            </div>
            <TodoList 
                todos={searchResults.length ? searchResults : todos} 
                onMarkComplete={markComplete} 
                onDelete={deleteTodo} 
                onUpdate={startEditing} // Trigger editing mode
            />
        </div>
    );
};

export default App;
