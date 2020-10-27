import React from 'react';
import { useDispatch } from 'react-redux';
import { todosLoad } from '../actions/requestTodo';
import { URL, LIST } from '../helpers/constants';

const Todo = ({ todo }) => {
  const {
    description, completed, id
  } = todo;

  const dispatch = useDispatch();

  async function changeTodo(id, complet, desc) {
    const urlCall = URL + LIST + '/' + id;
    await fetch(urlCall, {
      method: 'PUT', 
      mode: 'cors',
      cache: 'no-cache',
      body: JSON.stringify({
        completed: complet,
        description: desc,
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

  async function deleteTodo(id) {
    const urlCall = URL + LIST + '/' + id;
    await fetch(urlCall, {
      method: 'DELETE', 
      mode: 'cors',
      cache: 'no-cache',
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

  function handleChangeCheckbox(id) {
    const elemId = 'completion' + id
    const paragId = 'parag' + id
    const checkEl = document.getElementById(elemId).checked
    let descInfo = ''
    if (document.getElementById(paragId).tagName === 'INPUT') {
      descInfo = document.getElementById(paragId).value
    } else {
      descInfo = document.getElementById(paragId).innerHTML
    }
    console.log(descInfo);
    changeTodo(id, checkEl, descInfo)
  };

  function handleDelete(id) {
    deleteTodo(id)
  };

  function handleDoubleClick(id) {
    const elemId = 'parag' + id
    const paragEl = document.getElementById(elemId)
    const completeId = 'completion' + id
    const checkEl = document.getElementById(completeId).checked
    var input = document.createElement('input');
    input.setAttribute('id', elemId);
    input.value = paragEl.innerHTML;
    input.addEventListener('keydown', function(event){
        if(event.key === 'Escape'){
          input.parentNode.replaceChild(paragEl, input);
        }
        if(event.key === 'Enter'){
          changeTodo(id, checkEl, input.value)
        }
      });
    paragEl.parentNode.replaceChild(input, paragEl);
  };

  return (
    <div>
      { completed &&
        <input type="checkbox" id={"completion"+id} value={id} 
          onChange={() => handleChangeCheckbox(id)} checked />
      }
      { !completed &&
        <input type="checkbox" id={"completion"+id} value={id} 
          onChange={() => handleChangeCheckbox(id)} />
      }
      <p id={"parag"+id} 
        onDoubleClick={() => handleDoubleClick(id, completed)}>{description}</p>
      {completed.toString()}
      <span className="delete" 
        onClick={() => {if(window.confirm('Are you sure to delete?')){
              handleDelete(id) 
            }
          }
        }>X</span>
    </div>
  );
};

export default Todo;
