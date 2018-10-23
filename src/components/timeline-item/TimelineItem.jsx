import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons';
import './TimelineItem.scss';

const TimelineItem = (props) => {
  const item = props.item;

  function Timeframe() {
    if(item.timeframe) {
      return <div className="timeframe">{item.timeframe}</div>;
    }
    return null;
  }

  function Heading() {
    if(item.heading) {
      return <div className="heading">{item.heading}</div>;
    }
    return null;
  }

  function Title() {
    if(item.title) {
      return <div className="title">{item.title}</div>;
    }
    return null;
  }

  function Location() {
    if(item.location) {
      return <div className="location">{item.location}</div>;
    }
    return null;
  }

  function Summary() {
    if(item.summary) {
      return (
        <div className="summary">
          <p>{item.summary}</p>
        </div>
      );
    }
    return null;
  }

  return (
    <div className="timeline-item">
      <div className="timeline-point">
        <FontAwesomeIcon icon={item.type === 'edu' ? faGraduationCap : faBriefcase}/>
      </div>
      <div className="timeline-line"></div>
      <div className="timeline-content">
        <Timeframe />
        <Heading />
        <Title />
        <Location />
        <Summary />
      </div>
    </div>
  );
};

export default TimelineItem;
