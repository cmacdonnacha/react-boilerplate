import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 2px solid orange;
`;

const Title = styled.span`
  border: 2px solid yellow;
`;

const Footer: React.FunctionComponent = () => {
  return (
    <Container>
      <Title>Footer</Title>
    </Container>
  );
};

export default Footer;
