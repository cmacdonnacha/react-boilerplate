import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFriends, friendsSelector, Friend } from '../../slices/friendsSlice';

const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const FriendsPage: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { friends, loading, hasErrors } = useSelector(friendsSelector);

  const renderFriends = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display friends.</p>;

    return friends.slice(0, 10).map((friend: Friend) => <li key={friend.char_id}>{friend.name}</li>);
  };

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <Container>
      <ul>{renderFriends()}</ul>
    </Container>
  );
};

export default FriendsPage;
