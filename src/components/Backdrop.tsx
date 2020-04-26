import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  onClick: () => void;
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const Backdrop = ({ onClick }: Props) => {
  return <Container onClick={onClick} />;
};

export default Backdrop;
