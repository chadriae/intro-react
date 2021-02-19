import React, { useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Todo = ({ text, setTodos, todos, todo }) => {

    const [wellDone, getWellDone] = useState("");  

    // Events 
    const deleteHandler = () => {
        setTodos(todos.filter(element => element.id !== todo.id))
        console.log(todos);
    }

    const completeHandler = () => {
        setTodos(todos.map(element => {
            if(element.id === todo.id){
                return{
                    ...element, completed: !element.completed,
                };
            }
            return element;
        }))
    }

    // Animation
    const variants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                opacity: 0,
                ease: "easeOut", 
                duration: 4
              }
         }
      }

    const showWellDone = () => {
        const text = [
            <motion.span
                id="well-done"
                initial="hidden"
                animate='visible'
                variants={variants}
                transition={{ ease: "easeOut", duration: 2 }}
            >
                Well done!
            </motion.span>
        ];
        getWellDone(text);
    }

    const showElement = (element) => {
        console.log(element.className);
    }

    return (
        <div className="todo">
            <motion.li 
                className="todo" 
                whileHover={{ scale: 1.1 }}
                key={todo}
                >
                <span className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</span>
                <button onClick={() => {completeHandler(); showWellDone();}}>
                    <FaRegCheckCircle className="check-button" />
                </button>
                <button onClick={deleteHandler}>
                    <FaTrashAlt className="delete-button" />
                </button>
                {wellDone}
            </motion.li>        
        </div>
   );
};

export default Todo;