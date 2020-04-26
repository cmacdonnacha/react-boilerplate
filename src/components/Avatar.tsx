import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  src: string;
  size?: string;
}

const Image = styled.img<Props>`
  border-radius: 50%;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
`;

const Avatar = ({ src, size }: Props) => {
  const avatarSize = size || '2rem';
  return <Image src={src} size={avatarSize}></Image>;
};

export default Avatar;
