import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faCloudDownloadAlt
} from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';

import Timeline from './../../components/Timeline';
import Skills from './../../components/Skills';
import ScrollSpy from './../../components/ScrollSpy';
import { colors, Page } from './../../global';

const Container = styled(Page)`
  justify-content: center;
  flex-direction: column;
`;

const Section = styled.section`
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  display: flex;
  width: 850px;
  margin-top: 30px;

  @media only screen and (max-width: 850px) {
    width: 100%;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;

  @media only screen and (max-width: 480px) {
    margin: 0;
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
    margin: 30px 0;
  }
`;

const AboutMe = styled.p`
  margin: 30px auto;
  font-size: 24px;
  line-height: 2;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    margin: 10px 20px;
    line-height: 1.5;
  }
`;

const DownloadResume = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const PDFLink = styled.a`
  -webkit-transition: .5s all;
  -moz-transition: .5s all;
  transition: .5s all;
  background-color: ${colors.main};
  display: inline-block;
  position: relative;
  line-height: 50px;
  height: 50px;

  &:hover { background-color: ${colors.mainAlt}; }

  @media only screen and (max-width: 768px) {
    line-height: 40px;
    height: 40px;
  }
`;

const PDFIcon = styled(FontAwesomeIcon)`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  color: ${colors.white};
  padding: 10px;
  height: 30px;
  width: 20px;
  left: 0;
  top: 0;

  @media only screen and (max-width: 768px) {
    padding: 8px;
    height: 24px;
    width: 24px;
  }
`;

const PDFText = styled.span`
  padding: 10px 30px 10px 60px;
  text-align: center;
  color: ${colors.white};
  height: 100%;
  width: 100%;

  &.mobile { display: none; }

  @media only screen and (max-width: 768px) {
    padding: 10px 20px 10px 60px;
    font-size: 18px;
    &.desktop { display: none; }
    &.mobile { display: inline; }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin: 30px 0;

  .icon { color: ${colors.main}; }
  a { font-weight: bold; }

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    padding: 0;

    .icon { color: ${colors.main}; }
    a { font-weight: bold; }
  }
`;

const Profile = () => {
  const [state, setState] = useState({
    education: [],
    experience: [],
    skills: [],
    sections: [],
  });
  
  useEffect(() => {
    let getEducation = fetch('/data/education.json').then((response) => response.json());
    let getExperience = fetch('/data/experience.json').then((response) => response.json());
    let getSkills = fetch('/data/skills.json').then((response) => response.json());
    let getSections = fetch('/data/sections.json').then((response) => response.json());

    Promise.all([getEducation, getExperience, getSkills, getSections]).then((responses) => {
      setState({
        education: responses[0],
        experience: responses[1],
        skills: responses[2],
        sections: responses[3]
      });
    });
  }, [setState]);

  return (
    <Container>
      <Section id="intro">
        <SectionHeader>
          <SectionTitle>Intro</SectionTitle>
          <SectionPre>Who I am?</SectionPre>
        </SectionHeader>
        <SectionContent>
          <AboutMe>
             I am a software engineer with over 6 years of experience specializing in distributed systems and backend systems. Skilled in designing, developing, and optimizing scalable and fault-tolerant solutions for complex infrastrutures. Currently working at Mux helping developers to build anything video, whether it&rsquo;s a live-streaming platform, video chat, an on-demand video or anything in between.
          </AboutMe>
        </SectionContent>
      </Section>
      <Section id="education">
        <SectionHeader>
          <SectionTitle>Education</SectionTitle>
          <SectionPre>Where I&rsquo;ve studied.</SectionPre>
        </SectionHeader>
        <SectionContent>
          <Timeline items={state.education} />
        </SectionContent>
      </Section>
      <Section id="experience">
        <SectionHeader>
          <SectionTitle>Experience</SectionTitle>
          <SectionPre>Where I&rsquo;ve worked.</SectionPre>
        </SectionHeader>
        <SectionContent>
          <Timeline items={state.experience} />
        </SectionContent>
      </Section>
      <Section id="skills">
        <SectionHeader>
          <SectionTitle>Skills</SectionTitle>
          <SectionPre>What I can do.</SectionPre>
        </SectionHeader>
        <SectionContent>
          <Skills items={state.skills} />
        </SectionContent>
      </Section>
      <DownloadResume>
        <PDFLink href="/resume.pdf">
          <PDFIcon icon={faCloudDownloadAlt}/>
          <PDFText className="desktop">Click here to download my complete resume</PDFText>
          <PDFText className="mobile">Download resume</PDFText>
        </PDFLink>
      </DownloadResume>
      <Copyright>
        <p><FontAwesomeIcon className="icon" icon={faCode}/> by <a href="https://github.com/rozig/">Rozig</a>.</p>
      </Copyright>
      {/*<ScrollSpy sections={state.sections} />*/}
    </Container>
  );
};

export default Profile;
