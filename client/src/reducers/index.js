import { combineReducers } from 'redux';
import filter from './filter';
import todos from './todos';

const combinedReducer = combineReducers({
  filter,
  todos,
});

export default combinedReducer;
