import React from 'react';
import styled from 'styled-components/macro';
import { Friend } from 'models/Friend';
import FriendListItem from './FriendListItem';
import Loader from 'components/Loader';
import FriendsAPI from 'services/FriendsAPI';
import { QueryStatus } from 'constants/queryStatus';
import { useQuery } from 'react-query';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  list-style: none;
  padding: 0;
`;

const FriendsList = () => {
  const { status, data } = useQuery('friendsData', FriendsAPI.getFriends);

  const renderFriends = () => {
    if (status === QueryStatus.LOADING) {
      return <Loader text={'Making friends...'} />;
    }

    if (status === QueryStatus.ERROR) {
      return <span>Something went wrong :-(</span>;
    }

    if (data?.length === 0) {
      return <span>No friends found :-(</span>;
    }

    return data?.slice(0, 10).map((friend: Friend) => (
      <li key={friend.id}>
        <FriendListItem friend={friend} />
      </li>
    ));
  };

  return <List>{renderFriends()}</List>;
};

export default FriendsList;
