import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todosLoad } from '../actions/requestTodo';
import { URL, LIST } from '../helpers/constants';

const Todo = ({ todo }) => {
  const {
    description, completed, id
  } = todo;
  const [isShown, setIsShown] = useState(false);

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
    input.setAttribute('class', 'input-description');
    input.value = paragEl.innerHTML;
    input.addEventListener('keydown', function(event){
        if(event.key === 'Escape'){
          input.parentNode.replaceChild(paragEl, input);
        }
        if(event.key === 'Enter'){
          changeTodo(id, checkEl, input.value)
        }
      });
    input.addEventListener('focusout', function(event){
          input.parentNode.replaceChild(paragEl, input);
        })
    paragEl.parentNode.replaceChild(input, paragEl);
    input.focus();
  };

  return (
    <li className={`d-flex justify-content-between li-item ${completed ? "done" : "active"}`}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <label className="checkbox-container">
        <input type="checkbox" id={"completion"+id} value={id} className="toggle-todo"
          onChange={() => handleChangeCheckbox(id)} checked={completed ? 'checked' : ''} />
        <span className="checkmark"></span>
      </label>
      <p id={"parag"+id} className="description-info" 
        onDoubleClick={() => handleDoubleClick(id, completed)}>{description}</p>
      {isShown && (
      <span className="delete" 
        onClick={() => {if(window.confirm('Are you sure to delete?')){
              handleDelete(id) 
            }
          }
        }>X</span>
      )}
      {!isShown && (
        <span className="delete" />
      )}
    </li>
  );
};

export default Todo;
