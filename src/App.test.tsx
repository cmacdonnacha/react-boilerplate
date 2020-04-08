import React from 'react';
import App from './App';
import { renderWithRouterRedux } from './utils/test-utils';
import { screen } from '@testing-library/react';

test('should render Friends page as default', () => {
  // Arrange
  renderWithRouterRedux(<App />, ['/']);

  // Act
  const myFriendsLink = screen.getByText('My Friends');

  // Assert
  expect(myFriendsLink).toBeInTheDocument();
});

test('should render About page when clicked', () => {
  // Arrange
  renderWithRouterRedux(<App />, ['/']);

  // Act
  screen.getByText('About').click();

  // Assert
  expect(screen.getByText('This is the about page')).toBeInTheDocument();
});

test('should render Friends page when clicking away and back again', () => {
  // Arrange
  renderWithRouterRedux(<App />, ['/']);

  // Act
  screen.getByText('About').click();
  screen.getByText('Friends').click();

  // Assert
  expect(screen.getByText('My Friends')).toBeInTheDocument();
});
