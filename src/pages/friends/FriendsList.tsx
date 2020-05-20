import React from 'react';
import styled from 'styled-components/macro';
import { friendsSelector } from 'slices/friendsSlice';
import { Friend } from 'models/Friend';
import { useSelector } from 'react-redux';
import FriendListItem from './FriendListItem';
import Loader from 'components/Loader';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  list-style: none;
  padding: 0;
`;

const FriendsList = () => {
  const { friends, isLoading, hasErrors } = useSelector(friendsSelector);

  const renderFriends = () => {
    if (isLoading && friends.length === 0) {
      return <Loader text={'Making friends...'} />;
    }

    if (hasErrors || (!isLoading && friends.length === 0)) {
      return <span>Unable to find friends :-(</span>;
    }

    return friends.slice(0, 10).map((friend: Friend) => (
      <li key={friend.id}>
        <FriendListItem friend={friend} />
      </li>
    ));
  };

  return <List>{renderFriends()}</List>;
};

export default FriendsList;
