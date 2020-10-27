import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
    render, cleanup, waitFor, fireEvent,
  } from '@testing-library/react';
import TodosList from './todoList';
import combinedReducer from '../reducers';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

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

it('renders correctly when loading', () => {
  const image = document.createElement('img');
  image.setAttribute('class', 'image-load');
  image.setAttribute('alt', 'loadingImage');
  image.setAttribute('src', 'loadImg.gif');
  const { getByTestId } = renderElement(<TodosList />);
  expect(getByTestId('loading')).toMatchObject(image);
});

it('renders todo list of items', async () => {
  const { getByTestId } = renderElement(<TodosList />);
  const listTodos = await waitFor(
    () => getByTestId('list-todos'),
  );
  expect(listTodos).toBeDefined();
});

it('renders todo filters', async () => {
  const { getByTestId } = renderElement(<TodosList />);
  const footerFilter = await waitFor(
    () => getByTestId('footer-filter'),
  );
  expect(footerFilter).toBeDefined();
});

  
it('tests change on filter todo state', async () => {
  const { getByTestId } = renderElement(<TodosList />);
  let selectFilt = await waitFor(
    () => getByTestId('All-selected-filter'),
  );
  expect(selectFilt).toHaveTextContent('All');
  const changeFilt = await waitFor(
    () => getByTestId('Completed'),
  );
  fireEvent.click(changeFilt);
  selectFilt = await waitFor(
    () => getByTestId('Completed-selected-filter'),
  );
  expect(selectFilt).toHaveTextContent('Completed');
});
