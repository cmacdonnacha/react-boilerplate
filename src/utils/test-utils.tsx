import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { QueryClient, QueryClientProvider } from 'react-query';

export function renderWithRouter(ui: JSX.Element, initialRoutes: string[]) {
  const history = createMemoryHistory({ initialEntries: initialRoutes });

  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

export function renderWithReactQueryRouter(ui: JSX.Element, initialRoutes: string[]) {
  const history = createMemoryHistory({ initialEntries: initialRoutes });
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return {
    ...render(
      <QueryClientProvider client={queryClient}>
        <Router history={history}>{ui}</Router>
      </QueryClientProvider>,
    ),
    history,
  };
}
