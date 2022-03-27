import './Card.css';
import React from 'react';

const Card = (props) => {
  const { className, img, header } = props;
  return (
    <div className={className}>
      <img src={img} alt='' className={`${className}__Img`}></img>
      <h3 className={`${className}__Header`}>{header}</h3>
      {props.children}
    </div>
  );
};

export default Card;
