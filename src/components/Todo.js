import React from 'react';

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
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">Complete</button>
            <button onClick={deleteHandler} className="delete-btn">Delete</button>        
        </div>
   );
};

export default Todo;