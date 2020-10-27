import React from 'react';
import { useDispatch } from 'react-redux';
import { todosLoad } from '../actions/requestTodo';
import { URL, LIST } from '../helpers/constants';

const AddTodo = () => {
  let description
  const dispatch = useDispatch();

  function handleKeyPress(event) { 
    if(event.key === 'Enter'){
      document.getElementById('formTodoBtn').click();
    }
  };

  async function addNewTodo(description) {
    const urlCall = URL + LIST;
    await fetch(urlCall, {
      method: 'POST', 
      mode: 'cors',
      cache: 'no-cache',
      body: JSON.stringify({
        description: description,
        completed: false,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => response.json())
    .then(result => {
      dispatch(todosLoad());
    })
    .catch(error => {
      dispatch(todosLoad());
    });
  };

  return (
    <div>
      <form id="formAddTodo"
        onSubmit={e => {
          e.preventDefault()
          if (!description.value.trim()) {
            return
          }
          addNewTodo(description.value);
          description.value = ''
        }}
      >
        <input ref={self => (description = self)} 
          onKeyPress={handleKeyPress} 
        />
        <button id="formTodoBtn" type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo;