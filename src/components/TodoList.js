import React from 'react';
import { motion } from 'framer-motion';

import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul 
                className="todo-list">
            {filteredTodos.map(todo => (
                <motion.li 
                    whileHover={{ scale: 1.1 }}
                >
                    <Todo
                        setTodos = {setTodos} 
                        todos = {todos}
                        todo = {todo} 
                        key = {todo.id} 
                        text = {todo.text} 
                        id = {todo.id}
                        filteredTodos={filteredTodos} />
                </motion.li>
            ))}
            </ul>
        </div>
    );
};

export default TodoList;
