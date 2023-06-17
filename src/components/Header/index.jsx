import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'styled-components';
import {
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faGithubAlt
} from '@fortawesome/free-brands-svg-icons';

import { colors } from './../../global';

const Container = styled.div`
  position: relative;
  padding: 10px 50px;
  height: 70px;
  z-index: 3;

  @media only screen and (max-width: 768px) {
    overflow: hidden;
    padding: 10px 0;
    height: auto;
    width: 100%;
  }
`;

const Logo = styled(NavLink)`
  display: block;
  height: 50px;
  float: left;
  margin: 0;
  line-height: 30px;
  font-weight: bold;
  font-size: 30px;
  padding: 10px;

  @media only screen and (max-width: 768px) {
    height: auto;
    line-height: unset;
    font-size: 48px;
    padding: 0;
  }
`;

const SocialContainer = styled.ul`
  line-height: 50px;
  overflow: hidden;
  float: right;
  padding: 0px;
  margin: 0px;
  margin-left: 40px;

  @media only screen and (max-width: 768px) {
    line-height: 30px;
    margin-top: 10px;
  }
`;

const SocialItem = styled.li`
  display: inline-block;
  font-size: 18px;
  padding: 0 10px;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    padding: 0 20px;
  }
`;

const Nav = styled.nav`
  text-transform: uppercase;
  font-weight: bold;
  line-height: 50px;
  overflow: hidden;
  float: right;
  padding: 0px;
  margin: 0px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const NavItem = styled(NavLink)`
  display: inline-block;
  font-size: 16px;
  padding: 0 20px;

  &::before, &::after {
    -webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
    -moz-transition: -moz-transform 0.3s, opacity 0.2s;
    transition: transform 0.3s, opacity 0.2s;
    display: inline-block;
    opacity: 0;
  }

  &::before {
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    transform: translateX(20px);
    margin-right: 10px;
    content: '[';
  }
  &::after {
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    transform: translateX(-20px);
    margin-left: 10px;
    content: ']';
  }

  &:hover::before,
  &:hover::after,
  &:focus::before,
  &:focus::after,
  &.active::before,
  &.active::after {
    -webkit-transform: translateX(0px);
    -moz-transform: translateX(0px);
    transform: translateX(0px);
    opacity: 1;
  }
  &.active { color: ${colors.textHover}; }

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    padding: 0 10px;
  }
`;

const Header = () => {
  return (
    <Container>
      <Logo to="/">Rozig</Logo>
      <SocialContainer>
        <SocialItem>
          <a target="_blank" href="https://github.com/rozig/"><FontAwesomeIcon icon={faGithubAlt}/></a>
        </SocialItem>
        <SocialItem>
          <a href="mailto:the.ganzorig25@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
        </SocialItem>
        <SocialItem>
          <a target="_blank" href="https://www.linkedin.com/in/rozig/"><FontAwesomeIcon icon={faLinkedinIn}/></a>
        </SocialItem>
      </SocialContainer>
      <Nav>
        <NavItem className={({ isActive }) => (isActive && 'active')} to="/">Home</NavItem>
        <NavItem className={({ isActive }) => (isActive && 'active')} to="/profile">Profile</NavItem>
        <NavItem className={({ isActive }) => (isActive && 'active')} to="/contact">Contact</NavItem>
      </Nav>
    </Container>
  );
};

export default Header;
