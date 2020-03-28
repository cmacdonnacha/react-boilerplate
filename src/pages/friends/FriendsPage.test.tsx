import React from 'react';
import { render } from '@testing-library/react';
import FriendsPage from './FriendsPage';

test('renders the component', () => {
  // Arrange
  const { getByText } = render(<FriendsPage />);

  // Act
  const linkElement = getByText('My Friends Page');

  // Assert
  expect(linkElement).toBeInTheDocument();
});
