import React from 'react';
import { motion } from 'framer-motion';

import Todo from './Todo';


const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
            {filteredTodos.map(todo => (
            <Todo
                setTodos = {setTodos} 
                todos = {todos}
                todo = {todo} 
                key = {todo.id} 
                text = {todo.text} 
                id = {todo.id}
                filteredTodos={filteredTodos} />
            ))}
            </ul>
        </div>
    );
};

export default TodoList;
