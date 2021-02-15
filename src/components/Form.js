import React from 'react';

const Form = ({ setInputText, todos, setTodos, inputText }) => {

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

    return (
        <form className="form">
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                {/* <i className="fas fa-plus-square"></i> */}
                Add
            </button>
            <div className="select">
                <select className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;