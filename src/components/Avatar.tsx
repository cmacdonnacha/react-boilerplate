import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  src: string;
  size?: string;
  alt?: string;
}

const Image = styled.img<Props>`
  border-radius: 50%;
  height: ${(props) => props.size};
  min-width: ${(props) => props.size};
`;

const Avatar = ({ src, size, alt }: Props) => {
  const avatarSize = size || '2rem';
  return <Image src={src} size={avatarSize} alt={alt}></Image>;
};

export default Avatar;
