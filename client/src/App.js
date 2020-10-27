import logo from './logo.svg';
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick} >CLICK HERE</button>
      </header>
    </div>
  );
}

export default App;
