import React from 'react';
import styled from 'styled-components/macro';
import { StyledIcon } from '@styled-icons/styled-icon';
import { colours } from '../constants/colours';

interface Props {
  icon: React.ReactNode;
  ariaLabel?: string;
  enableTooltip?: boolean;
  onClick?: () => void;
}

const Button = styled.button`
  border: none;
  background-color: transparent;

  &:hover {
    background-color: ${colours.lightGrey};
    cursor: pointer;
  }
`;

const IconButton: React.FunctionComponent<Props> = (props: Props) => {
  const tooltip = props.enableTooltip ? props.ariaLabel : '';
  return (
    <Button aria-label={props.ariaLabel} title={tooltip} onClick={props.onClick}>
      {props.icon}
    </Button>
  );
};

export default IconButton;
