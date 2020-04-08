import React from 'react';
import { waitFor, screen } from '@testing-library/react';
import FriendsPage from './FriendsPage';
import { renderWithRouterRedux } from '../../utils/test-utils';
import { Friend } from '../../slices/friendsSlice';
import axios from 'axios';

// Mock the Axios module. This ensure we don't call a real rest api while running tests.
jest.mock('axios');

// This line simply resolves the typescript errors caused when using jest.mock('axios').
const axiosMock = axios as jest.Mocked<typeof axios>;

const mockFriends: Friend[] = [
  {
    id: 1,
    name: 'Omar Little',
  },
];

// We could use a beforeEach here but this way it's easier to keep track of what your tests are doing.
const fetchMockFriends = () => {
  axiosMock.get.mockResolvedValueOnce({
    data: mockFriends,
  });
};

const fetchMockNoFriends = () => {
  axiosMock.get.mockResolvedValueOnce({
    data: [],
  });
};

test('should find a friend within the list', async () => {
  // Arrange
  fetchMockFriends();
  renderWithRouterRedux(<FriendsPage />, ['/']);

  // Act
  const element = await waitFor(() => screen.getByText('Omar Little'));

  // Assert
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(element).toBeInTheDocument();
});

test('should display loading text while waiting for friends to load', async () => {
  // Arrange
  fetchMockFriends();
  renderWithRouterRedux(<FriendsPage />, ['/']);

  // Act
  const element = await waitFor(() => screen.getByText('Making friends...'));

  // Assert
  expect(element).toHaveTextContent('Making friends...');
});

test('should display error message when no friends found', async () => {
  // Arrange
  fetchMockNoFriends();
  renderWithRouterRedux(<FriendsPage />, ['/']);

  // Act
  const element = await waitFor(() => screen.getByText('Unable to find friends :-('));

  // Assert
  expect(element).toHaveTextContent('Unable to find friends :-(');
});

test('should display error message when an error occurs while fetching friends', async () => {
  // Arrange
  renderWithRouterRedux(<FriendsPage />, ['/']);

  // Act
  const element = await waitFor(() => screen.getByText('Unable to find friends :-('));

  // Assert
  expect(element).toHaveTextContent('Unable to find friends :-(');
});
