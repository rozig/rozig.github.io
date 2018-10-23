import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faGithubAlt
} from '@fortawesome/free-brands-svg-icons';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/" className="logo">
        <div className="name">Rozig</div>
      </NavLink>
      <ul className="social-links">
        <li className="social-link">
          <a target="_blank" href="https://github.com/rozig/"><FontAwesomeIcon icon={faGithubAlt}/></a>
        </li>
        <li className="social-link">
          <a href="mailto:the.ganzorig25@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
        </li>
        <li className="social-link">
          <a target="_blank" href="https://www.linkedin.com/in/rozig/"><FontAwesomeIcon icon={faLinkedinIn}/></a>
        </li>
      </ul>
      <nav className="nav">
        <NavLink exact={true} className="nav-item" activeClassName="active" to="/">Home</NavLink>
        <NavLink className="nav-item" activeClassName="active" to="/profile">Profile</NavLink>
        <NavLink className="nav-item" activeClassName="active" to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
};

export default Header;
