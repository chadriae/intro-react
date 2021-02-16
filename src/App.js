import React, { useState } from 'react';
import './App.css';

// importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
  const [inputText, setInputText] = useState(""); 
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        My first react-app, a to-do list!
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
