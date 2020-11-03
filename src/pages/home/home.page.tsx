import React from "react";

import "./home.page.scss";
import TodoList from '../../components/todo-list/todo-list.component';

export const HomePage = () => (<div className={'home-page'}>
    <h1>Home</h1>
    <TodoList />
</div>)

