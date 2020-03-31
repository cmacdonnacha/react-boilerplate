import React from 'react';
import App from './App';
import { renderWithRouter } from './utils/test-utils';

describe('Sidebar items should render correct pages', () => {
  test('should render Friends page as default', () => {
    // Arrange
    const { getByText } = renderWithRouter(<App />, ['/']);

    // Act
    const myFriendsLink = getByText('My Friends Page');

    // Assert
    expect(myFriendsLink).toBeInTheDocument();
  });

  test('should render About page when clicked', () => {
    // Arrange
    const { getByText } = renderWithRouter(<App />, ['/']);

    // Act
    getByText('About').click();

    // Assert
    expect(getByText('This is the about page')).toBeInTheDocument();
  });

  test('should render Friends page when clicking away and back again', () => {
    // Arrange
    const { getByText } = renderWithRouter(<App />, ['/']);

    // Act
    getByText('About').click();
    getByText('My Friends').click();

    // Assert
    expect(getByText('My Friends Page')).toBeInTheDocument();
  });
});
