import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'styled-components';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faGithub,
  faMedium
} from '@fortawesome/free-brands-svg-icons';

import { colors, Row, Col, Page } from './../../global';

const Container = styled(Page)`
  justify-content: center;
`;

const Section = styled.section`
  padding-top: 30px;
  width: 800px;

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  padding-bottom: 30px;

  @media only screen and (max-width: 480px) {
    padding: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 60px;
  padding: 0;
  margin: 0;

  @media only screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

const SectionPre = styled.span`
  font-size: 16px;
`;

const SectionContent = styled.div`
  text-align: center;

  @media only screen and (max-width: 480px) {
    padding: 30px 0;
  }
`;

const Link = styled.a`
  background-color: ${colors.white};
  border: 1px solid ${colors.main};
  border-radius: 4px;
  padding: 0 6px;
  color: ${colors.main};
  font-size: 16px;
  margin: 0 5px;

  @media only screen and (max-width: 480px) {
    margin: 5px 0;
  }
`;

const PGP = styled.div`
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
  flex-wrap: wrap;
  font-size: 24px;
  line-height: 2;
  display: flex;
  padding: 0;

  @media only screen and (max-width: 768px) {
    justify-content: flex-start;
    line-height: 1.5;
    font-size: 20px;
  }
`;

const ContactLinks = styled.div`
  margin-top: 40px;
  text-align: left;
  flex-wrap: wrap;
  display: flex;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const ContactItem = styled.div`
  position: relative;
  margin: 10px 0;
  line-height: 42px;
  overflow: hidden;
  font-size: 22px;
  width: 50%;

  @media only screen and (max-width: 480px) {
    line-height: 36px;
    font-size: 18px;
    width: 100%;
    margin: 0;
    margin-bottom: 10px;
  }
`;

const ContactItemIcon = styled(FontAwesomeIcon)`
  -webkit-tranisiton: .5s all;
  -moz-tranisiton: .5s all;
  transition: .5s all;
  background-color: ${colors.iconBg};
  position: absolute;
  border-radius: 3px;
  padding: 8px;
  height: 26px;
  width: 26px;
  left: 0;
  top: 0;

  @media only screen and (max-width: 480px) {
  padding: 7px;
  height: 22px;
  width: 22px;
  }
`;

const ContactItemContent = styled.div`
  -webkit-tranisition: .5s all;
  -moz-transition: .5s all;
  transition: .5s all;
  position: relative;
  padding-left: 50px;

  @media only screen and (max-width: 480px) {
    padding-left: 44px;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Section id="info">
        <SectionHeader>
          <SectionTitle>Contact</SectionTitle>
          <SectionPre>Get in touch</SectionPre>
        </SectionHeader>
        <SectionContent>
          <PGP>
            PGP Fingerprint: <Link href="https://pgp.mit.edu/pks/lookup?op=get&search=0xC09D284EB3830930">D78A 27A8 C7E5 E55E B594  F340 C09D 284E B383 0930</Link>
          </PGP>
          <ContactLinks>
            <ContactItem>
              <ContactItemIcon icon={faMapMarkerAlt}/>
              <ContactItemContent>San Francisco, CA</ContactItemContent>
            </ContactItem>
            <ContactItem>
              <a target="_blank" href="https://www.linkedin.com/in/rozig/">
                <ContactItemIcon icon={faLinkedinIn}/>
                <ContactItemContent>rozig</ContactItemContent>
              </a>
            </ContactItem>
            <ContactItem>
              <a target="_blank" href="https://medium.com/@rozig">
                <ContactItemIcon icon={faMedium}/>
                <ContactItemContent>rozig</ContactItemContent>
              </a>
            </ContactItem>
            <ContactItem>
              <a href="mailto:the.ganzorig25@gmail.com">
                <ContactItemIcon icon={faEnvelope}/>
                <ContactItemContent>the.ganzorig25@gmail.com</ContactItemContent>
              </a>
            </ContactItem>
            <ContactItem>
              <a href="tel:+13124041266">
                <ContactItemIcon icon={faPhone}/>
                <ContactItemContent>+1 (312) 404-1266</ContactItemContent>
              </a>
            </ContactItem>
            <ContactItem>
              <a target="_blank" href="https://github.com/rozig/">
                <ContactItemIcon icon={faGithub}/>
                <ContactItemContent>rozig</ContactItemContent>
              </a>
            </ContactItem>
          </ContactLinks>
        </SectionContent>
      </Section>
    </Container>
  );
};

export default Contact;
