import React from 'react';
import { render } from '@testing-library/react';
import AboutPage from './AboutPage';

test('renders learn react link', () => {
  // Arrange
  const { getByText } = render(<AboutPage />);

  // Act
  const linkElement = getByText('AboutPage');

  // Assert
  expect(linkElement).toBeInTheDocument();
});
