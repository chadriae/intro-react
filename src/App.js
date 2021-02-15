import React, { useState } from 'react';
import './App.css';

// importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
  const [inputText, setInputText] = useState(""); 

  return (
    <div className="App">
      <header>
        My first react-app, a to-do list!
      </header>
      <Form setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
