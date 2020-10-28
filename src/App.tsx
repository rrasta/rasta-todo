import React, { useState } from 'react';
import Input from './components/input/input.component';
import './App.css';

const App = () => {
    const [todos, setTodos] = useState<string[]>( []);
    const addNewTodoItem = (todoItem: string) => {
        if (todoItem === '') {
            return;
        }

        setTodos([
            ...todos,
            todoItem
        ]);
    }

    return (
        <div className="App">
            <Input onSubmit={addNewTodoItem} />
            <ul>
                {todos.map(todo => (<li key={`todo-${todo}`}>{todo}</li>))}
            </ul>
        </div>
    );
}

export default App;
