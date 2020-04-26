import React from 'react';
import styled from 'styled-components/macro';
import { colours } from 'constants/colours';

interface Props {
  heading: string;
  children?: React.ReactElement | React.ReactElement[];
}

const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  padding: 20px;

  & h1 {
    margin: 0;
    color: ${colours.navy};
  }
`;

const Content = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  overflow-y: auto;
  align-items: center;
`;

const Page = ({ heading, children }: Props) => {
  return (
    <Container>
      <h1>{heading}</h1>
      <Content>{children}</Content>
    </Container>
  );
};

export default Page;
