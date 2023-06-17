import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

import { colors } from './../../global';

const Container = styled.div`
  margin-top: -107px;
  position: fixed;
  right: 50px;
  width: 50px;
  top: 50%;
`;

const SectionLink = styled.a`
  background-color: ${colors.borderGray};
  -webkit-transition: .5s all;
  -moz-tranisiton: .5s all;
  transition: .5s all;
  border-radius: 50%;
  position: relative;
  margin: 30px 0;
  display: block;
  height: 16px;
  width: 16px;
  span {
    -webkit-transition: .5s all;
    -moz-transition: .5s all;
    transition: .5s all;
    position: absolute;
    line-height: 16px;
    text-align: right;
    overflow: hidden;
    font-size: 14px;
    color: ${colors.main};
    right: 120%;
    width: 0;
  }
  &:hover, &.active {
    background-color:$main;
    span { width:60px; }
  }
  &::before, &::after {
    border-color:$border-gray;
    border-width:0 1px 0 1px;
    border-style:solid;
    position:absolute;
    margin-left:-1px;
    display:block;
    height:15px;
    content:"";
    left:50%;
  }
  &::before {
    top:-15px;
  }
  &::after {
    bottom:-15px;
  }
  &:first-child::before { display:none; }
  &:last-child::after { display:none; }
`;

class ScrollSpy extends Component {
  render() {
    const sections = this.props.sections.map((section) =>
      <SectionLink href={section.anchor} key={section.id}><span>{section.name}</span></SectionLink>
    );
    return (
      <Container>
        {sections}
      </Container>
    );
  }
};

export default ScrollSpy;
