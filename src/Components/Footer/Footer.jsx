import './Footer.css';
import React from 'react';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer__Container'>
        <span>Move By Design, LLC</span>
        <span>Durham, NC</span>
        <a href='mailto:culver.dean.coach@gmail.com'>
          culver.dean.coach@gmail.com
        </a>
        <span>est. 2021</span>
      </div>
    </div>
  );
};

export default Footer;
