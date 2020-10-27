import { LOAD_TODOS, RECEIVE_TODOS, ERROR_FETCHING_TODOS} from '../actions/requestTodo';

const initialState = {
  isFetching: false,
  todos: [{}],
  status: '',
};

const todos = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_TODOS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_TODOS:
      return {
        ...state,
        isFetching: false,
        todos: payload,
      };
    case ERROR_FETCHING_TODOS:
      return {
        ...state,
        isFetching: false,
        todos: payload,
      };

    default:
      return state;
  }
};

export default todos;