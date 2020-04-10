import React from 'react';
import styled from 'styled-components/macro';
import { screenSize } from '../constants/screenSizes';
import { colours } from '../constants/colours';

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const StyledMenuButton = styled.button<Props>`
  @media (min-width: ${screenSize.medium}) {
    display: none;
  }

  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  /* Should not remove focus outline as it degrades accessability */
  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ isOpen }) => (isOpen ? colours.primary : colours.white)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) => (isOpen ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const MenuButton: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <StyledMenuButton aria-label="Toggle menu" aria-expanded={props.isOpen} isOpen={props.isOpen} onClick={props.onClick}>
      <div />
      <div />
      <div />
    </StyledMenuButton>
  );
};

export default MenuButton;
