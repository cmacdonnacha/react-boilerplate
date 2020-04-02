import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const StyledMenuButton = styled.button<Props>`
  @media (min-width: 768px) {
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

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ isOpen }): string => (isOpen ? 'white' : '#7b69ea')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isOpen }): string => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }): string => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }): string => (isOpen ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ isOpen }): string => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
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
