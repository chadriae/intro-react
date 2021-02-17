//TODO: error message when no input
//TODO: filter uncompleted

import React, { useState, useEffect } from 'react';
import './App.scss';
import Clock from 'react-live-clock';

// importing components
import Form from './components/Form';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

const App = () => {
  // useState
  const [inputText, setInputText] = useState(""); 
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // run once when app starts
  useEffect(() => {
    getLocalTodos();
  }, [])

  // useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // functions and Events
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed == true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.uncompleted == true));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  // save to local storage
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItems === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  return (

    <div className="App">
      <header>
        <Clock format={'dddd'} />'s to do-list
      </header>
      <div className="clock">
        <span className="time-now"><Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Brussels'} /></span>
        <br />
        <span className="date"><Clock format={'DD-MM-yyyy'}  /></span><br />
      </div>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos} 
        todos={todos} 
        filteredTodos={filteredTodos}
      />
      <Footer />
    </div>
  );
}

export default App;
