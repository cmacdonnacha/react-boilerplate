import React from 'react';
import Sidebar from './Sidebar';
import { renderWithRouter } from '../utils/test-utils';

describe('Sidebar links', () => {
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

  test('should ensure the About link is set to active when clicked', () => {
    // Arrange
    const { getByText } = renderWithRouter(<Sidebar />, ['/']);

    // Act
    const aboutLink = getByText('About');
    aboutLink.click();

    // Assert
    expect(aboutLink).toHaveClass('active');
  });

  test('should ensure the About link is NOT set to active when another link is clicked', () => {
    // Arrange
    const { getByText } = renderWithRouter(<Sidebar />, ['/']);

    // Act
    const aboutLink = getByText('About');
    aboutLink.click();
    getByText('My Friends').click();

    // Assert
    expect(aboutLink).not.toHaveClass('active');
  });
});
