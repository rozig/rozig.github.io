import React, { Component } from 'react';
import './Skills.scss';

import Skill from './../skill/Skill';

class Skills extends Component {
  RenderSkills() {
    let skills = {
      language: {
        name: "Programming/Scripting Languages",
        data: []
      },
      framework: {
        name: "Frameworks",
        data: []
      },
      tool: {
        name: "Tools",
        data: []
      },
      other: {
        name: "Other",
        data: []
      }
    };
    this.props.items.forEach(item => {
      skills[item.type]["data"].push(<Skill key={item.id} skill={item} />);
    });
    let categories = [];
    for(let [key, category] of Object.entries(skills)) {
      if(category.data.length > 0) {
        categories.push(
          <div className="col col-6 skill-category" key={key}>
            <h3 className="category-name">{category.name}</h3>
            <div className="category-content">{category.data}</div>
          </div>
        );
      }
    }
    return (
      <div className="row">
        {categories}
      </div>
    );
  }

  render() {
    return (
      <div className="skills">
        {this.RenderSkills()}
      </div>
    );
  }
};

export default Skills;
