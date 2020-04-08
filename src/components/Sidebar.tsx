import React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { colours } from '../constants/colours';
import { screenSize } from '../constants/screenSizes';

interface Props {
  isSidebarOpen?: boolean;
  onLinkClicked?: () => void;
}

const Container = styled.nav<Props>`
  grid-area: sidebar;
  background-color: #7b69ea;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  min-width: 200px;

  /* This style will trigger when the screen width is less than 640px (i.e tablet size) */
  @media (max-width: ${screenSize.medium}) {
    position: absolute;
    height: 100%;
    transition: transform 0.3s ease-in-out;
    transform: translateX(${(props) => (props.isSidebarOpen ? '0' : '-100%')});
    min-width: 70%;
    z-index: 2;
  }
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 60px;

  /* This style will trigger when the screen width is over 640px (i.e tablet size) */
  @media (min-width: ${screenSize.medium}) {
    margin-top: 0;
  }
`;

const SidebarListItem = styled.li`
  padding: 20px;
  font-size: 1.2rem;

  @media (min-width: ${screenSize.medium}) {
    padding: 15px;
    font-size: 1rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  text-decoration: none;
  color: ${colours.white};

  &.active {
    text-decoration: underline;
  }
`;

const Sidebar: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Container isSidebarOpen={props.isSidebarOpen}>
      <SidebarList>
        <SidebarListItem aria-label="My Friends Link">
          <StyledNavLink to="/" exact onClick={props.onLinkClicked}>
            Friends
          </StyledNavLink>
        </SidebarListItem>
        <SidebarListItem>
          <StyledNavLink to="/about" onClick={props.onLinkClicked}>
            About
          </StyledNavLink>
        </SidebarListItem>
      </SidebarList>
    </Container>
  );
};

export default Sidebar;
