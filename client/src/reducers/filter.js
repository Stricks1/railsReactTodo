import { CHANGE_FILTER } from '../actions/changeFilter';

function filter(state = 'All', action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.completion;
    default:
      return state;
  }
}

export default filter;
