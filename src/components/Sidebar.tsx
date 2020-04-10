import React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { colours } from '../constants/colours';
import { screenSize } from '../constants/screenSizes';
import { UserFriends as UserFriendsIcon } from '@styled-icons/fa-solid/UserFriends';
import { InfoCircle as InfoCircleIcon } from '@styled-icons/fa-solid/InfoCircle';

interface Props {
  isSidebarOpen?: boolean;
  onLinkClicked?: () => void;
}

const Container = styled.nav<Props>`
  grid-area: sidebar;
  background-color: ${colours.grey};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  min-width: 200px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);

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

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  text-transform: capitalize;
  text-decoration: none;
  border-left: solid 5px ${colours.grey};
  color: ${colours.primary};
  font-size: 1.3rem;
  font-weight: bold;

  @media (min-width: ${screenSize.medium}) {
    font-size: 1rem;
  }

  &.active {
    background-color: white;
    border-left: solid 5px ${colours.secondary};
  }

  /* List Item Icon */
  svg {
    height: 1em;
    width: 1em;
    margin-right: 1rem;
  }
`;

const Sidebar: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Container isSidebarOpen={props.isSidebarOpen}>
      <SidebarList>
        <li>
          <StyledNavLink to="/" exact onClick={props.onLinkClicked}>
            <UserFriendsIcon />
            Friends
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about" onClick={props.onLinkClicked}>
            <InfoCircleIcon />
            About
          </StyledNavLink>
        </li>
      </SidebarList>
    </Container>
  );
};

export default Sidebar;
