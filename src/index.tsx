import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './slices';

const store = configureStore({ reducer: rootReducer });

const theme = {
  primary: '#00C068',
};

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, #root {
    height: 100%;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Router>
          <Route path="/" component={App}></Route>
        </Router>
        <GlobalStyle />
      </React.Fragment>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
