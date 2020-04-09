import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFriends, friendsSelector, Friend } from '../../slices/friendsSlice';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const FriendsPage: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { friends, isLoading, hasErrors } = useSelector(friendsSelector);

  const renderFriends = () => {
    if (isLoading && friends.length === 0) {
      return <span>Making friends...</span>;
    }

    if (hasErrors || (!isLoading && friends.length === 0)) {
      return <span>Unable to find friends :-(</span>;
    }

    return friends.slice(0, 10).map((friend: Friend) => <li key={friend.id}>{friend.name}</li>);
  };

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <Container>
      <h1>My Friends</h1>
      <ul>{renderFriends()}</ul>
    </Container>
  );
};

export default FriendsPage;
