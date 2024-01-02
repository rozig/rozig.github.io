import React from 'react';
import { styled } from 'styled-components';

import { colors, Page } from './../../global';

const Container = styled(Page)`
  justify-content: center;
  align-items: center;
  height: 100%;

  @media only screen and (max-width: 768px) {
    align-items: flex-start;
  }
`;

const ContentWrapper = styled.div`
  width: 800px;

  @media only screen and (max-width: 768px) {
    padding: 80px 20px 0 20px;
  }
`;

const Headline = styled.h1`
  font-weight: normal;
  font-size: 48px;
  margin: 0;

  strong { font-size: 56px; }

  @media only screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 1.5;
  }
`;

const Highlight = styled.span`
  font-weight: bold;
  color: ${colors.main};
`;

const Info = styled.p`
  color: ${colors.textAlt};
  font-weight: normal;
  font-size: 18px;
  margin: 10px 0;
`;

const Home = () => (
    <Container>
      <ContentWrapper>
        <Headline>Hello,<br/>I&rsquo;m <Highlight>Ganzorig Erdenebat</Highlight>! Software engineer, linux lover, lifehacker.</Headline>
      </ContentWrapper>
    </Container>
);

export default Home;
