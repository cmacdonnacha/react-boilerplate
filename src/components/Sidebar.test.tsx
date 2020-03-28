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
});
