import React from 'react';
import styled from 'styled-components/macro';
import { Friend } from '../../slices/friendsSlice';
import { colours } from '../../constants/colours';

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
  min-height: 3rem;
  border-radius: 5px;
  padding: 10px;
`;

const FriendListItem: React.FunctionComponent<Props> = (props: Props) => {
  return <Container>{props.friend.name}</Container>;
};

export default FriendListItem;
