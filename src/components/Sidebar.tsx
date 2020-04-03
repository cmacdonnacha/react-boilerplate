import React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { colours } from '../constants/colours';

interface Props {
  isSidebarOpen?: boolean;
  onSidebarLinkClicked?: () => void;
}

const Container = styled.nav<Props>`
  grid-area: sidebar;
  background-color: #7b69ea;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  min-width: 200px;

  @media (max-width: 769px) {
    position: absolute;
    height: 100%;
    transition: transform 0.3s ease-in-out;
    transform: translateX(${(props): string => (props.isSidebarOpen ? '0' : '-100%')});
    min-width: 70%;
  }
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;

  @media (max-width: 769px) {
    margin-top: 60px;
  }
`;

const SidebarListItem = styled.li`
  padding: 15px;
  font-size: 1rem;

  @media (max-width: 769px) {
    padding: 20px;
    font-size: 1.2rem;
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
          <StyledNavLink to="/" exact onClick={props.onSidebarLinkClicked}>
            My Friends
          </StyledNavLink>
        </SidebarListItem>
        <SidebarListItem>
          <StyledNavLink to="/about" onClick={props.onSidebarLinkClicked}>
            About
          </StyledNavLink>
        </SidebarListItem>
      </SidebarList>
    </Container>
  );
};

export default Sidebar;
