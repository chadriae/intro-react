import React from 'react';

const Form = ({ setInputText }) => {

    const inputTextHandler = (event) => {
        console.log(event.target.value);
        setInputText(event.target.value);
    }
    return (
        <form className="form">
            <input onChange={inputTextHandler} type="text" className="todo-input" />
            <button className="todo-button" type="submit">
                {/* <i className="fas fa-plus-square"></i> */}
                Add
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;