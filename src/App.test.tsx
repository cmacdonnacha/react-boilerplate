import React from 'react';
import App from './App';
import { renderWithReactQueryRouter } from 'utils/test-utils';
import { screen } from '@testing-library/react';

test('should render Friends page as default', () => {
  // Arrange
  renderWithReactQueryRouter(<App />, ['/']);

  // Act
  const element = screen.getByText('My Friends');

  // Assert
  expect(element).toBeInTheDocument();
});

test('should render About page when clicked', () => {
  // Arrange
  renderWithReactQueryRouter(<App />, ['/']);

  // Act
  screen.getByText('About').click();

  // Assert
  expect(screen.getByText('This is the about page', { exact: false })).toBeInTheDocument();
});

test('should render Friends page when clicking away and back again', () => {
  // Arrange
  renderWithReactQueryRouter(<App />, ['/']);

  // Act
  screen.getByText('About').click();
  screen.getByText('Friends').click();

  // Assert
  expect(screen.getByText('My Friends')).toBeInTheDocument();
});
