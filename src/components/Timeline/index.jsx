import React from 'react';
import { styled } from 'styled-components';

import TimelineItem from './../TimelineItem';

const Container = styled.div`
  @media only screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Timeline = (props) => {
  const listItems = props.items.map((item) =>
    <TimelineItem key={item.id} item={item} />
  );

  return <Container>{listItems}</Container>;
};

export default Timeline;
