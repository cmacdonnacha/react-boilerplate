import React from 'react';
import Sidebar from './Sidebar';
import { renderWithRouter } from 'utils/test-utils';
import { screen } from '@testing-library/react';

test('should display the correct sidebar items', () => {
  // Arrange
  renderWithRouter(<Sidebar />, ['/']);

  // Act
  const friendsLink = screen.getByText('Friends');
  const aboutLink = screen.getByText('About');

  // Assert
  expect(friendsLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
});

test('should change url when clicking on About link', () => {
  // Arrange
  const { history } = renderWithRouter(<Sidebar />, ['/']);

  // Act
  const aboutLink = screen.getByText('About');
  aboutLink.click();

  // Assert
  expect(history.location.pathname).toEqual('/about');
});

test('should ensure the About link is set to active when clicked', () => {
  // Arrange
  renderWithRouter(<Sidebar />, ['/']);

  // Act
  const aboutLink = screen.getByText('About');
  aboutLink.click();

  // Assert
  expect(aboutLink).toHaveClass('active');
});

test('should ensure the About link is NOT set to active when another link is clicked', () => {
  // Arrange
  renderWithRouter(<Sidebar />, ['/']);

  // Act
  const aboutLink = screen.getByText('About');
  aboutLink.click();
  screen.getByText('Friends').click();

  // Assert
  expect(aboutLink).not.toHaveClass('active');
});
