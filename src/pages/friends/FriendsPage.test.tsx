import React from 'react';
import { waitFor, screen } from '@testing-library/react';
import FriendsPage from './FriendsPage';
import { renderWithReactQueryRouter } from 'utils/test-utils';
import axios from 'axios';
import { Friend } from 'models/Friend';

// Mock the Axios module. This ensure we don't call a real rest api while running tests.
jest.mock('axios');

// This line simply resolves the typescript errors caused when using jest.mock('axios').
const axiosMock = axios as jest.Mocked<typeof axios>;

const mockFriends: Friend[] = [
  {
    id: 1,
    name: 'Omar Little',
    email: 'o.little@comeattheking.com',
    avatarUrl: 'https://i.imgur.com/eTia7Xp.jpg',
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

// Give each test a clean slate.
beforeEach(() => axiosMock.get.mockReset());

test('should find a friend within the list', async () => {
  // Arrange
  fetchMockFriends();
  renderWithReactQueryRouter(<FriendsPage />, ['/']);

  // Act
  const element = await waitFor(() => screen.getByText('Omar Little'));

  // Assert
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(element).toBeInTheDocument();
});

test('should display loading text while waiting for friends to load', async () => {
  // Arrange
  fetchMockFriends();
  renderWithReactQueryRouter(<FriendsPage />, ['/']);

  // Act
  await waitFor(() => {
    // Assert
    expect(screen.getByText('Making friends...')).toBeInTheDocument();
  });
});

test('should display error message when no friends found', async () => {
  // Arrange
  fetchMockNoFriends();
  renderWithReactQueryRouter(<FriendsPage />, ['/']);

  // Act
  const element = await waitFor(() => screen.getByText('No friends found :-('));

  // Assert
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(element).toBeInTheDocument();
});

test('should display error message when an error occurs while fetching friends', async () => {
  // Arrange
  renderWithReactQueryRouter(<FriendsPage />, ['/']);

  // Act
  const element = await waitFor(() => screen.getByText('No friends found :-('));

  // Assert
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(element).toBeInTheDocument();
});
