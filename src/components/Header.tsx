import React from 'react';
import styled from 'styled-components/macro';
import { MenuOutline } from '@styled-icons/evaicons-outline/MenuOutline';

const Container = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5px;
  border: 2px solid blue;
`;

const Title = styled.span`
  border: 2px solid yellow;
  margin-left: 10px;
`;

const Header: React.FunctionComponent = () => {
  return (
    <Container>
      <MenuOutline size={30} />

      <Title>React Boilerplate</Title>
    </Container>
  );
};

export default Header;
