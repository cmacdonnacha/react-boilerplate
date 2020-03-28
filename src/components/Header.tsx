import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 2px solid blue;
`;

const Title = styled.span`
  border: 2px solid yellow;
`;

const Header: React.FunctionComponent = () => {
  return (
    <Container>
      <Title>Header</Title>
    </Container>
  );
};

export default Header;
