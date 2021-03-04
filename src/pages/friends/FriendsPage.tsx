import React from 'react';
import Page from 'components/Page';
import FriendsList from './FriendsList';

const FriendsPage = () => {
  return (
    <Page heading="My Friends">
      <FriendsList />
    </Page>
  );
};

export default FriendsPage;
