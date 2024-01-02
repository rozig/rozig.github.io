import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';

import { colors } from './../../global';

const Prop = styled.div`
  font-size: 12px;
  padding: 5px 0;
`;

const Heading = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
`;

const Summary = styled.p`
  line-height: 1.5;
  font-size: 15px;
  margin: 10px 0;
  padding: 0;
`;

const Type = styled.div`
  border: 2px solid ${colors.borderGray};
  background-color: ${colors.white};
  border-radius: 50%;
  position: absolute;
  margin-left: -16px;
  margin-top: -16px;
  line-height: 28px;
  height: 32px;
  width: 32px;
  z-index: 2;
  left: 50%;
  top: 50%;

  @media only screen and (max-width: 860px) {
    display: none;
  }
`;

const Line = styled.div`
  border-width: 0px 1px;
  border-style: solid;
  border-color: ${colors.borderGray};
  position: absolute;
  margin-left: -1px;
  height: 100%;
  z-index: 1;
  left: 50%;
  width: 0;

  @media only screen and (max-width: 860px) {
    display: none;
  }
`;

const Content = styled.div`
  border: 1px solid ${colors.borderGray};
  background-color: ${colors.white};
  position: relative;
  text-align: left;
  padding: 10px;
  width: 400px;
  margin: 20px 0;

  &::after, &::before {
    position: absolute;
    height: 0;
    width: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    margin-top: -6px;
    top: 50%;
  }
  &::after {
    border-left: 8px solid ${colors.borderGray};
    right: -8px;
  }
  &::before {
    border-right: 8px solid ${colors.borderGray};
    left: -8px;
  }

  @media only screen and (max-width: 860px) {
    width: 100%;
    margin: 0;
  }
`;

const Container = styled.div`
  position: relative;
  overflow: hidden;

  &:nth-of-type(odd) {
    ${Content} {
      float: left;
      &::after { content: ""; }
    }
  }

  &:nth-of-type(even) {
    ${Content} {
      float: right;
      &::before { content: ""; }
    }
  }

  &:first-child {
    ${Type} {
      margin-top: unset;
      top: 40px;
    }

    ${Line} {
      margin-top: 72px;
    }

    ${Content}::after, ${Content}::before {
      margin-top: 0;
      top: 30px;
    }
  }

  &:last-child {
    ${Type} {
      margin-top: unset;
      bottom: 40px;
      top: unset;
    }

    ${Line} {
      margin-top: -72px;
    }

    ${Content}::after, ${Content}::before {
      margin-top: 0;
      bottom: 30px;
      top: unset;
    }
  }

  @media only screen and (max-width: 860px) {
    margin-bottom: 10px;
  }
`;

const TimelineItem = (props) => {
  const item = props.item;

  return (
    <Container>
      <Type>
        <FontAwesomeIcon icon={item.type === 'edu' ? faGraduationCap : faBriefcase}/>
      </Type>
      <Line></Line>
      <Content>
        {item.timeframe && <Prop>{item.timeframe}</Prop>}
        {item.heading && <Heading>{item.heading}</Heading>}
        {item.title && <Prop>{item.title}</Prop>}
        {item.location && <Prop>{item.location}</Prop>}
        {item.summary && <Summary>{item.summary}</Summary>}
      </Content>
    </Container>
  );
};

export default TimelineItem;
