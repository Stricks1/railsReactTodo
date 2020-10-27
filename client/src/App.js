import AddTodo from './containers/formTodo';
import TodosList from './containers/todoList';
import React from 'react';
import './App.css';

function App() {
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