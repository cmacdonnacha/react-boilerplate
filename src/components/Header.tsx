import React from 'react';
import styled from 'styled-components/macro';
import MenuButton from './MenuButton';
import { screenSize } from '../constants/screenSizes';

interface Props {
  isSidebarOpen: boolean;
  onMenuButtonClicked: () => void;
}

const Container = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  border: 2px solid blue;
`;

const Title = styled.h3`
  margin-left: 10px;

  @media (max-width: ${screenSize.medium}) {
    margin-left: 2.5em;
  }
`;

const Header: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Container>
      <MenuButton isOpen={props.isSidebarOpen} onClick={props.onMenuButtonClicked} />

      <Title>React Boilerplate</Title>
    </Container>
  );
};

export default Header;
