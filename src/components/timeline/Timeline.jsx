import React from 'react';
import './Timeline.scss';

import TimelineItem from './../timeline-item/TimelineItem';

const Timeline = (props) => {
  const listItems = props.items.map((item) =>
    <TimelineItem key={item.id} item={item} />
  );

  return (
    <div className="timeline">
      {listItems}
    </div>
  );
};

export default Timeline;
