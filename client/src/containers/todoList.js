import React, { useEffect }  from 'react';
import Todo from '../components/todoItem';
import FilterBar from '../components/filterBar';
import { useDispatch, useSelector } from 'react-redux';
import { todosLoad } from '../actions/requestTodo';
import loadImg from '../assets/loadImg.gif';

const TodosList = () => {
  const dispatch = useDispatch();
  const todosState = useSelector(state => state.todos);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(todosLoad());
  }, [dispatch]);

  let filterComp = false;

  if (filter === 'Completed') {
    filterComp = true;
  } else {
    filterComp = false;
  }

  return (
    <div>
      { todosState.isFetching
        && (
        <div data-testid="loading" className="bg-load">
          <img className="image-load" src={loadImg} alt="loadingImage" />
        </div>
        )}
      <div className="list-container">
        {
          !todosState.isFetching && todosState.todos.data
          && 
          todosState.todos.data.map(todo => 
            (<Todo key={todo.attributes.id} todo={todo.attributes} />))
            .filter(item => (item.props.todo.completed === filterComp 
              || filter === 'All'))
        }
      </div>
      <div className="filter-container">
          <FilterBar />
      </div>
    </div>
  );
}


export default TodosList;
