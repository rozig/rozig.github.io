import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './ScrollSpy.scss';

class ScrollSpy extends Component {
  render() {
    const sections = this.props.sections.map((section) =>
      <a className="section-link" href={section.anchor} key={section.id}><span>{section.name}</span></a>
    );
    return (
      <div className="scroll-spy">
        {sections}
      </div>
    );
  }
};

export default ScrollSpy;
