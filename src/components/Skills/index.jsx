import React, { Component } from 'react';
import { styled } from 'styled-components';

import Skill from './../Skill';
import { Col, Row } from './../../global';


const Container = styled.div`
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;

const Skills = ({ items }) => {
  const renderSkills = () => {
    const skills = {
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

    items.forEach(item => {
      skills[item.type]["data"].push(<Skill key={item.id} skill={item} />);
    });

    const categories = [];
    for(let [key, category] of Object.entries(skills)) {
      if(category.data.length > 0) {
        categories.push(
          <Col className="col-6 skill-category" key={key}>
            <h3 className="category-name">{category.name}</h3>
            <div className="category-content">{category.data}</div>
          </Col>
        );
      }
    }

    return (
      <Row>
        {categories}
      </Row>
    );
  }

  return (
    <Container>
      {renderSkills()}
    </Container>
  );
};

export default Skills;
