import AddTodo from './containers/formTodo';
import TodosList from './containers/todoList';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="todo-container">
          <AddTodo />
          <TodosList />
      </div>
    </div>
  );
}

export default App;