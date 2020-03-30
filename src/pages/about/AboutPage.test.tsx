import React from 'react';
import { render } from '@testing-library/react';
import AboutPage from './AboutPage';

test('renders learn react link', () => {
  // Arrange
  const { getByText } = render(<AboutPage />);

  // Act
  const element = getByText('This is the about page');

  // Assert
  expect(element).toBeInTheDocument();
});
