import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const AboutPage: React.FunctionComponent = () => {
  return (
    <Container>
      <span>AboutPage</span>
    </Container>
  );
};

export default AboutPage;
