import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { ITodoItem } from '../todo-list/todo-list.component';
import './todo-item.component.scss';

interface ITodoItemProps {
    todo: ITodoItem;
    onChecked: (id: string) => void;
    onDelete: (id: string) => void;
}

const TodoItem = ({ todo, onChecked, onDelete }: ITodoItemProps) => {
    const { id, text, checked } = todo;
    const handleOnChange = () => { onChecked(id) }

    return (<li className={'todo-item'}>
        <input
            type="checkbox"
            checked={checked}
            onChange={handleOnChange}
        />
        <span className={`${checked ? 'checked' : ''}`}>{text}</span>
        {checked && (<button onClick={onDelete.bind(null, id)}>
            <FontAwesomeIcon icon={faTrash} />
        </button>)}
    </li>);
}

export default TodoItem;

