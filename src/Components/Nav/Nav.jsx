import './Nav.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <NavLink className='Nav__Link' to='about'>
        About
      </NavLink>
      <NavLink className='Nav__Link' to='contact'>
        Contact
      </NavLink>
      <NavLink className='Nav__Link' to='Testimonials'>
        Testimonials
      </NavLink>
      <NavLink className='Nav__Link' to='Movement-Archive'>
        Movement Archive
      </NavLink>
    </div>
  );
};

export default Nav;
