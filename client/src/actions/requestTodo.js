import axios from 'axios';
import { URL, LIST } from '../helpers/constants';

export const LOAD_TODOS = 'LOAD_TODOS';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const ERROR_FETCHING_TODOS = 'ERROR_FETCHING_TODOS';

export const todosLoad = () => async dispatch => {
  try {
    dispatch({
      type: LOAD_TODOS,
    });
    const urlCall = URL + LIST;
    axios.get(urlCall).then(response => {
      const todos = response.data;
      dispatch({
        type: RECEIVE_TODOS,
        payload: todos,
      });
    });
  } catch (error) {
    dispatch({
      type: ERROR_FETCHING_TODOS,
      payload: error,
    });
  }
};
