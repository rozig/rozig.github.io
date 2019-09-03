import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
import './Contact.scss';

const Contact = () => {
  return (
    <div className="page-content contact">
      <section id="info" className="contact-section">
        <div className="section-header">
          <h2 className="section-title">Contact</h2>
          <span className="section-desc">Get in touch</span>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col col-12">
              <div className="description">
                PGP Fingerprint: <a className="link" href="https://pgp.mit.edu/pks/lookup?op=get&search=0xC09D284EB3830930">D78A 27A8 C7E5 E55E B594  F340 C09D 284E B383 0930</a>
              </div>
            </div>
          </div>
          <div className="contact-info row">
            <div className="col col-6">
              <div className="item">
                <FontAwesomeIcon className="icon" icon={faMapMarkerAlt}/>
                <div>San Francisco, CA</div>
              </div>
              <div className="item">
                <a target="_blank" href="https://medium.com/@rozig">
                  <FontAwesomeIcon className="icon" icon={faMedium}/>
                  <div>rozig</div>
                </a>
              </div>
              <div className="item">
                <a href="tel:+13124041266">
                  <FontAwesomeIcon className="icon" icon={faPhone}/>
                  <div>+1 (312) 404-1266</div>
                </a>
              </div>
            </div>
            <div className="col col-6">
              <div className="item">
                <a target="_blank" href="https://www.linkedin.com/in/rozig/">
                  <FontAwesomeIcon className="icon" icon={faLinkedinIn}/>
                  <div>rozig</div>
                </a>
              </div>
              <div className="item">
                <a href="mailto:the.ganzorig25@gmail.com">
                  <FontAwesomeIcon className="icon" icon={faEnvelope}/>
                  <div>the.ganzorig25@gmail.com</div>
                </a>
              </div>
              <div className="item">
                <a target="_blank" href="https://github.com/rozig/">
                  <FontAwesomeIcon className="icon" icon={faGithub}/>
                  <div>rozig</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
