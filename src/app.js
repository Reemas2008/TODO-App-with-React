import React, { useState, useEffect } from 'react';

import './app.css'


function App() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');

    useEffect (() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect (() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);



    const addTodo = () => {
        if (task.trim !== '') {
            setTodos([...todos, task]);
            setTask('');
        }
    };

    const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
      };

    return (
        <div className='app'>
            <header className='appHeader'>
                <h1>TODO App</h1>
                <div>
                    <input
                    type='text'
                    placeholder='Add a new task'
                    value={task}
                    onChange={(e) => setTask(e.target.value)} />
                    <button id="addButton" onClick={addTodo}>Add</button>
                </div>
                <div>
                    <ul>
                        {todos?.map((todo, index) => (
                            <li key={index}>{todo} <button onClick={() => removeTodo(index)}>Done</button></li>
                        ))}
                    </ul>
                </div>
            </header>
        </div>
    )
}


export default App;