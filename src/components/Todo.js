import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

const Todo = ({text, setTodos, todos, todo }) => {
    // Events 
    const deleteHandler = () => {
        setTodos(todos.filter(element => element.id !== todo.id))
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

    return (
        <div className="todo">
            <li>
                <span className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</span>
                <button onClick={completeHandler}>
                    <FaRegCheckCircle className="check-button" />
                </button>
                <button onClick={deleteHandler}>
                    <FaTrashAlt className="delete-button" />
                </button>
            </li>        
        </div>
   );
};

export default Todo;