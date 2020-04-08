import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import rootReducer from '../slices';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { initialState as friendsInitialState } from '../slices/friendsSlice';
import { RootState } from '../slices';

const rootInitialState: RootState = {
  friends: friendsInitialState,
};

export function renderWithRouter(ui: JSX.Element, initialRoutes: string[]) {
  const history = createMemoryHistory({ initialEntries: initialRoutes });

  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

export function renderWithRouterRedux(ui: JSX.Element, initialRoutes: string[], initialState: object = rootInitialState) {
  const state = initialState;
  const history = createMemoryHistory({ initialEntries: initialRoutes });
  const myStore = configureStore({ reducer: rootReducer, preloadedState: state });

  return {
    ...render(
      <Provider store={myStore}>
        <Router history={history}>{ui}</Router>
      </Provider>,
    ),
    history,
  };
}
