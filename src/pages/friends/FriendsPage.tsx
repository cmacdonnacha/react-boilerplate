import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFriends } from 'slices/friendsSlice';
import Page from 'components/Page';
import FriendsList from './FriendsList';

const FriendsPage: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <Page heading="My Friends">
      <FriendsList />
    </Page>
  );
};

export default FriendsPage;
