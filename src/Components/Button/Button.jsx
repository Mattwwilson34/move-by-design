import './Button.css';
import React from 'react';

const Button = (props) => {
  const { label } = props;
  return <button className='Button'>{label}</button>;
};

export default Button;
