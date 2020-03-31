import React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

const Container = styled.nav`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  border: 1px solid green;
`;

const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  text-decoration: none;

  &.active {
    text-decoration: underline;
    color: red;
  }
`;

const Sidebar: React.FunctionComponent = () => {
  return (
    <Container>
      <ul>
        <li>
          <StyledNavLink to="/" exact>
            My Friends
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about">About</StyledNavLink>
        </li>
      </ul>
    </Container>
  );
};

export default Sidebar;
