import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

/* eslint-disable */
export function renderWithRouter(ui, initialRoutes) {
  const history = createMemoryHistory({ initialEntries: initialRoutes });
  return { ...render(<Router history={history}>{ui}</Router>) };
}
