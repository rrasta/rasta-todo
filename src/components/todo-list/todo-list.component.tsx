import React, { useState } from 'react';
import Input from '../input/input.component';
import TodoItem from '../todo-item/todo-item.component';

import './todo-list.component.scss';

export interface ITodoItem {
    id: string;
    text: string;
    checked: boolean;
}

const TodoList = () => {
    const [todos, setTodos] = useState<ITodoItem[]>( []);
    const addNewTodoItem = (todoItem: string) => {
        if (todoItem === '') {
            return;
        }

        setTodos([
            ...todos,
            {
                id: `item-${new Date().getTime()}`,
                text: todoItem,
                checked: false
            }
        ]);
    }
    const handleOnChecked = (id: string) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                        id: todo.id,
                        text: todo.text,
                        checked: !todo.checked
                    }
                }

                return todo;
            })
        )
    };
    const handleOnDelete = (id: string) => {
        // TODO usuwanie elementu z listy
        // google it: JS array FILTER method
    };

    return (
        <div className="todo-list">
            <Input onSubmit={addNewTodoItem} />
            <ul>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onChecked={handleOnChecked}
                        onDelete={handleOnDelete}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;