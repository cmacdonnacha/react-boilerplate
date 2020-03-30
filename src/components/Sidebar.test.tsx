import React from 'react';
import Sidebar from './Sidebar';
import { renderWithRouter } from '../utils/test-utils';

describe('Sidebar', () => {
  test('should display the correct sidebar items', () => {
    // Arrange
    const { getByText } = renderWithRouter(<Sidebar />, ['/']);

    // Act
    const friendsLink = getByText('My Friends');
    const aboutLink = getByText('About');

    // Assert
    expect(friendsLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  test('should change url when clicking on About link', () => {
    // Arrange
    const { history, getByText } = renderWithRouter(<Sidebar />, ['/']);

    // Act
    const aboutLink = getByText('About');
    aboutLink.click();

    // Assert
    expect(history.location.pathname).toContain('about');
  });
});
