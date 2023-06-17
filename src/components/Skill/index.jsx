import React from 'react';
import { styled } from 'styled-components';

import { colors } from './../../global';

const Container = styled.div`
  position: relative;
  line-height: 36px;
  text-align: left;
  padding: 0 10px;
  height: 36px;

  @media only screen and (max-width: 1200px) {
    padding: 0;
  }

  @media only screen and (max-width: 768px) {
    line-height: 30px;
    padding: 0 15px;
    height: 40px;
  }
`;

const Name = styled.div`
  padding-right: 210px;
  font-size: 16px;

  @media only screen and (max-width: 1200px) {
    line-height: 24px;
    font-size: 16px;
    padding: 0;
  }

  @media only screen and (max-width: 768px) {
    line-height: 24px;
    font-size: 16px;
    padding: 0;
  }
`;

const ProgressContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 210px;
  right: 10px;
  top: 0;

  @media only screen and (max-width: 1200px) {
    padding-right: 40px;
    position: relative;
    line-height: 10px;
    height: 10px;
    width: 100%;
    right: 0;
    top: 0;
  }

  @media only screen and (max-width: 768px) {
    padding-right: 40px;
    position: relative;
    line-height: 10px;
    height: 10px;
    width: 100%;
    right: 0;
    top: 0;
  }
`;

const ProgressPlaceholder = styled.div`
  background-color: ${colors.skillsBg};
  position: absolute;
  margin-top: -4px;
  height: 8px;
  width: 160px;
  left: 0;
  top: 50%;

  @media only screen and (max-width: 1200px) {
    position: relative;
    margin-top: 0;
    height: 10px;
    width: 100%;
    top: 0;
  }

  @media only screen and (max-width: 768px) {
    position: relative;
    margin-top: 0;
    height: 10px;
    width: 100%;
    top: 0;
  }
`;

const Progress = styled.div`
  background-color: ${colors.main};
  height: 100%;

  @media only screen and (max-width: 1200px) {
    background-color: ${colors.main};
    height: 100%;
  }

  @media only screen and (max-width: 768px) {
    background-color: ${colors.main};
    height: 100%;
  }
`;

const ProgressPercentage = styled.div`
  padding-left: 160px;
  text-align: center;
  position: relative;
  font-weight: bold;
  font-size: 24px;
  color: ${colors.main};

  @media only screen and (max-width: 1200px) {
    position: absolute;
    font-size: 16px;
    height: 100%;
    width: 40px;
    padding: 0;
    right: 0;
    top: 0;
  }

  @media only screen and (max-width: 768px) {
    position: absolute;
    font-size: 16px;
    height: 100%;
    width: 40px;
    padding: 0;
    right: 0;
    top: 0;
  }
`;

const calculateLevel = (date) => {
  const [yearSince, _monthSince, _daySince] = date.split('-');
  const today = new Date();
  return today.getFullYear() - yearSince;
};

const Skill = ({ skill }) => {
  const totalExperience = new Date().getFullYear() - 2016;
  const expLevel = calculateLevel(skill.since);
  const expPercentage = expLevel * 100 / totalExperience;

  return (
    <Container>
      <Name>{skill.name}</Name>
      <ProgressContainer>
        <ProgressPlaceholder>
          <Progress style={{width: `${expPercentage}%`}}></Progress>
        </ProgressPlaceholder>
        <ProgressPercentage>
          {`${expLevel} ${expLevel > 1 ? 'yrs' : 'yr'}`}
        </ProgressPercentage>
      </ProgressContainer>
    </Container>
  );
};

export default Skill;
