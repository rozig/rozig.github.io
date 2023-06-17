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
  width: 660px;
  margin: auto;
  padding: 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 160px;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 0;
  }
`;

const Section = styled.section`
  padding: 20px 0;

  @media only screen and (max-width: 480px) {
    padding: 0;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  padding: 30px 0;

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

  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

const SectionContent = styled.div`
  text-align: center;
  overflow: hidden;

  @media only screen and (max-width: 480px) {
    padding: 20px 0;
  }
`;

const SectionContentDescription = styled.div`
  padding: 10px;
`;

const Link = styled.a`
  background-color: ${colors.white};
  border: 1px solid ${colors.main};
  border-radius: 4px;
  padding: 2px 4px;
  color: ${colors.main};
  font-size: 14px;
  margin: 0 5px;
`;

const ContactInfo = styled(Row)`
  text-align: left;
  margin-top: 40px;

  @media only screen and (max-width: 480px) {
    margin-top: 10px;
    padding: 0 30px;
  }
`;

const ContactItem = styled.div`
  position: relative;
  padding: 10px 15px;
  line-height: 42px;
  overflow: hidden;
  font-size: 22px;

  @media only screen and (max-width: 480px) {
    line-height: 36px;
    padding: 5px 10px;
    font-size: 18px;
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
  left: 15px;
  top: 10px;

  @media only screen and (max-width: 480px) {
    height: 36px;
    width: 36px;
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
          <Row>
            <Col className="col-12">
              <SectionContentDescription>
                PGP Fingerprint: <Link href="https://pgp.mit.edu/pks/lookup?op=get&search=0xC09D284EB3830930">D78A 27A8 C7E5 E55E B594  F340 C09D 284E B383 0930</Link>
              </SectionContentDescription>
            </Col>
          </Row>
          <ContactInfo>
            <Col className="col-6">
              <ContactItem>
                <ContactItemIcon icon={faMapMarkerAlt}/>
                <ContactItemContent>San Francisco, CA</ContactItemContent>
              </ContactItem>
              <ContactItem>
                <a target="_blank" href="https://medium.com/@rozig">
                  <ContactItemIcon icon={faMedium}/>
                  <ContactItemContent>rozig</ContactItemContent>
                </a>
              </ContactItem>
              <ContactItem>
                <a href="tel:+13124041266">
                  <ContactItemIcon icon={faPhone}/>
                  <ContactItemContent>+1 (312) 404-1266</ContactItemContent>
                </a>
              </ContactItem>
            </Col>
            <Col className="col-6">
              <ContactItem>
                <a target="_blank" href="https://www.linkedin.com/in/rozig/">
                  <ContactItemIcon icon={faLinkedinIn}/>
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
                <a target="_blank" href="https://github.com/rozig/">
                  <ContactItemIcon icon={faGithub}/>
                  <ContactItemContent>rozig</ContactItemContent>
                </a>
              </ContactItem>
            </Col>
          </ContactInfo>
        </SectionContent>
      </Section>
    </Container>
  );
};

export default Contact;
