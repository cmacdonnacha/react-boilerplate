import React from 'react';
import { render } from '@testing-library/react';
import AboutPage from './AboutPage';
import { screen } from '@testing-library/react';

test('renders learn react link', () => {
  // Arrange
  render(<AboutPage />);

  // Act
  const element = screen.getByText('This is the about page');

  // Assert
  expect(element).toBeInTheDocument();
});
