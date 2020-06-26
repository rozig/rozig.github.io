import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faCloudDownloadAlt
} from '@fortawesome/free-solid-svg-icons';
import './Profile.scss';

import Timeline from './../../components/timeline/Timeline';
import Skills from './../../components/skills/Skills';
import ScrollSpy from './../../components/scroll-spy/ScrollSpy';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: [],
      experience: [],
      skills: [],
      sections: []
    };
  }
  componentDidMount() {
    let getEducation = fetch('/data/education.json').then((response) => response.json());
    let getExperience = fetch('/data/experience.json').then((response) => response.json());
    let getSkills = fetch('/data/skills.json').then((response) => response.json());
    let getSections = fetch('/data/sections.json').then((response) => response.json());

    Promise.all([getEducation, getExperience, getSkills, getSections]).then((responses) => {
      this.setState({
        education: responses[0],
        experience: responses[1],
        skills: responses[2],
        sections: responses[3]
      });
    });
  }

  render() {
    return (
      <div className="page-content profile">
        <section id="intro" className="profile-section">
          <div className="section-header">
            <h2 className="section-title">Intro</h2>
            <span className="section-desc">Who I am?</span>
          </div>
          <div className="section-content">
            <p className="about-me">
              I am a software engineer with over 3 years of experience working on front-end and back-end applications using Javascript and Python. Currently working as a Data Engineer at WithMe Health.
            </p>
          </div>
        </section>
        <section id="education" className="profile-section">
          <div className="section-header">
            <h2 className="section-title">Education</h2>
            <span className="section-desc">Where I've studied.</span>
          </div>
          <div className="section-content">
            <Timeline items={this.state.education} />
          </div>
        </section>
        <section id="experience" className="profile-section">
          <div className="section-header">
            <h2 className="section-title">Experience</h2>
            <span className="section-desc">Where I've worked.</span>
          </div>
          <div className="section-content">
            <Timeline items={this.state.experience} />
          </div>
        </section>
        <section id="skills" className="profile-section">
          <div className="section-header">
            <h2 className="section-title">Skills</h2>
            <span className="section-desc">What I can do.</span>
          </div>
          <div className="section-content">
            <Skills items={this.state.skills} />
          </div>
        </section>
        <div className="download-resume">
          <a href="/resume.pdf">
            <FontAwesomeIcon className="icon" icon={faCloudDownloadAlt}/>
            <span className="text desktop">Click here to download my complete resume</span>
            <span className="text mobile">Download resume</span>
          </a>
        </div>
        <div className="copyright">
          <p><FontAwesomeIcon className="icon" icon={faCode}/> by <a href="https://github.com/rozig/">Rozig</a>.</p>
        </div>
        {/*<ScrollSpy sections={this.state.sections} />*/}
      </div>
    );
  }
};

export default Profile;
