import React from 'react';
import styled from 'styled-components/macro';
import { Friend } from 'models/Friend';
import { colours } from 'constants/colours';
import Avatar from 'components/Avatar';

interface Props {
  friend: Friend;
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  background-color: ${colours.grey};
  margin: 10px 0;
  min-height: 4rem;
  border-radius: 5px;
  padding: 15px 15px 15px 25px;
`;

const FriendDetailsContainer = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
`;

const FriendName = styled.span`
  display: flex;
  flex-direction: column;
  color: ${colours.navy};
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

const FriendEmail = styled.span`
  display: flex;
  flex-direction: column;
  color: ${colours.navy};
  font-weight: bold;
  font-size: 0.8rem;
`;

const FriendListItem = ({ friend }: Props) => {
  return (
    <Container>
      <Avatar src={friend.avatarUrl} size={'5rem'} />
      <FriendDetailsContainer>
        <FriendName>{friend.name}</FriendName>
        <FriendEmail>{friend.email}</FriendEmail>
      </FriendDetailsContainer>
    </Container>
  );
};

export default FriendListItem;
