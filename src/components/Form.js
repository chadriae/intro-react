import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    };

    const submitTodoHandler = (event) => {
        event.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.floor(Math.random() * 1000)}
        ])
        setInputText("");
    };

    const statusHandler = (event) => {
        setStatus(event.target.value);
    }

    return (
        <form className="form">
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <motion.button 
                onClick={submitTodoHandler} 
                className="todo-button" 
                type="submit"
                whileHover={{ scale: 1.1 }}
                >
              <FaPlusCircle className="add-button" />
            </motion.button>
            <div className="select">
                <select onChange={statusHandler} className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;