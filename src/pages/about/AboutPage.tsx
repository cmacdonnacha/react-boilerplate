import React from 'react';
import styled from 'styled-components';
import Page from 'components/Page';

const AboutText = styled.p`
  display: flex;
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const AboutPage = () => {
  return (
    <Page heading="About">
      <AboutText>This is the about page, where I tell you all about myself!</AboutText>
    </Page>
  );
};

export default AboutPage;
