import React from 'react';
import { styled } from 'styled-components';

import { colors, Page } from './../../global';

const Container = styled(Page)`
  position: absolute;
  padding-top: 70px;
  height: 100%;
  width: 100%;
  z-index: 1;
  left: 0;
  top: 0;

  @media only screen and (max-width: 768px) {
    padding-top: 170px;
  }
`;

const ContentWrapper = styled.div`
  margin-left: -400px;
  margin-top: -142px;
  position: absolute;
  overflow: hidden;
  height: 284px;
  width: 800px;
  left: 50%;
  top: 50%;

  @media only screen and (max-width: 1200px) {
    padding: 0 50px;
    margin-left: 0;
    width: 100%;
    left: 0;
  }

  @media only screen and (max-width: 768px) {
    position: relative;
    padding: 30px 20px;
    height: 100%;
    width: 100%;
    margin: 0;
    left: 0;
    top: 0;
  }
`;

const Headline = styled.h1`
  font-weight: normal;
  margin-bottom: 0;
  margin-top: 10px;
  font-size: 48px;

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
  font-size: 18px;
  color: ${colors.textAlt};
  font-weight: normal;
  margin: 10px 0;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const Home = () => (
    <Container>
      <ContentWrapper>
        <Headline>Hello,<br/>I&rsquo;m <Highlight>Ganzorig Erdenebat</Highlight>! Software engineer, linux lover, lifehacker.</Headline>
      </ContentWrapper>
    </Container>
);

export default Home;
