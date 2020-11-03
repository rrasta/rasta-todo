import React, { useEffect, useState } from 'react';
import Input from '../input/input.component';
import TodoItem from '../todo-item/todo-item.component';

import './todo-list.component.scss';
import { useList } from '../../common/common';

export interface ITodoItem {
    id: string;
    text: string;
    checked: boolean;
}

const TodoList = () => {
    const [list, addItem, updateItem, removeItem] = useList<ITodoItem>([]);
    const addNewTodoItem = (text: string) => {
        if (text !== '') {
            addItem({ text, checked: false })
        }
    }
    const handleOnChecked = (id: string) => {
        if (id !== '') {
            updateItem(id, (item) => ({ ...item, checked: !item.checked }));
        }
    };
    const handleOnDelete = (id: string) => {
        if (id !== '') {
            removeItem(id);
        }
    };

    useEffect(() => {
        console.log(list);
    },[list])

    return (
        <div className="todo-list">
            <Input onSubmit={addNewTodoItem} />
            <ul>
                {list.map(todo => (
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

