import AddTodo from './containers/formTodo';
import TodosList from './containers/todoList';
import React from 'react';
import './App.css';

function App() {
  async function handleClick() {
    console.log('clicou');
    let data = {};
    const response = await fetch('http://localhost:3000/todos', {
      method: 'GET', 
      mode: 'cors',
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => response.json())
    .then(result => {
      console.log('Success:', result.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="App">
      <header>
        <h1 className="header-todo">todos</h1>
      </header>
      <div className="todo-container">
          <AddTodo />
          <TodosList />
      </div>
    </div>
  );
}

export default App;