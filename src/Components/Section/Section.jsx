import './Section.css';
import React from 'react';

const Section = (props) => {
  const { className, color, height, width } = props;
  return (
    <div
      className={className}
      style={{
        height: height,
        width: width,
        backgroundColor: color,
      }}>
      {props.children}
    </div>
  );
};

export default Section;
