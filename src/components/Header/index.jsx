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
  justify-content: space-between;
  align-items: center;
  position: absolute;
  flex-wrap: wrap;
  padding: 10px 0;
  display: flex;
  height: 70px;
  width: 100%;
  z-index: 3;
  left: 0;
  top: 0;

  @media only screen and (max-width: 768px) {
    justify-content: space-around;
    padding: 0 20px;
    height: auto;
    width: 100%;
  }
`;

const Logo = styled(NavLink)`
  line-height: 70px;
  font-weight: bold;
  font-size: 48px;
  display: block;
  flex-grow: 1;
  margin: 0;

  @media only screen and (max-width: 768px) {
    order: 1;
  }
`;

const SocialContainer = styled.ul`
  justify-content: flex-end;
  list-style-type: none;
  line-height: 50px;
  overflow: hidden;
  display: flex;
  flex-grow: 1;
  padding: 0;
  margin: 0;

  @media only screen and (max-width: 768px) {
    order: 2;
  }
`;

const SocialItem = styled.li`
  font-size: 20px;
  margin: 0 10px;

  @media only screen and (max-width: 768px) {
    margin: 0;
    margin-left: 20px;
  }
`;

const Nav = styled.nav`
  justify-content: flex-start;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 50px;
  display: flex;
  flex-grow: 8;
  padding: 0px;
  margin: 0px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    flex-grow: 1;
    order: 3;
  }
`;

const NavItem = styled(NavLink)`
  font-size: 16px;
  margin: 0 20px;

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
    margin: 0 10px;
  }
`;

const Header = () => {
  return (
    <Container>
      <Logo to="/">Rozig</Logo>
      <Nav>
        <NavItem className={({ isActive }) => (isActive && 'active')} to="/">Home</NavItem>
        <NavItem className={({ isActive }) => (isActive && 'active')} to="/profile">Profile</NavItem>
        <NavItem className={({ isActive }) => (isActive && 'active')} to="/contact">Contact</NavItem>
      </Nav>
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
    </Container>
  );
};

export default Header;
