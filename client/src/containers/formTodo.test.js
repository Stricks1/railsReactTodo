import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';
import AddTodo from './formTodo';
import combinedReducer from '../reducers';
import '@testing-library/jest-dom/extend-expect';


function renderElement(
  component,
  { initialState, store = createStore(
      combinedReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunk)),
    ) } = {},
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}

it('renders container with form', () => {
  const { getByTestId } = renderElement(<AddTodo />);
  expect(getByTestId('form-add-todo')).toBeDefined();
});
