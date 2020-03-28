import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const FriendsPage: React.FunctionComponent = () => {
  return (
    <Container>
      <span>My Friends Page</span>
    </Container>
  );
};

export default FriendsPage;
