import React from 'react';
import './Skill.scss';

const Skill = (props) => {
  const skill = props.skill;
  return (
    <div className="skill">
      <div className="name">{skill.name}</div>
      <div className="progress-container">
        <div className="progress-placeholder">
          <div className="progress" style={{width: skill.level}}></div>
        </div>
        <div className="progress-percentage">{skill.level}</div>
      </div>
    </div>
  );
};

export default Skill;
