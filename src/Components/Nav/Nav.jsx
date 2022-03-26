import './Nav.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const links = [
    {
      link: 'about',
      label: 'About',
    },
    {
      link: 'contact',
      label: 'Contact',
    },
    {
      link: 'testimonials',
      label: 'Testimonials',
    },
    {
      link: 'movement-archive',
      label: 'Movement Archive',
    },
  ];

  return (
    <div>
      {links.map((link) => {
        return (
          <NavLink
            key={link.link}
            className='Nav__NavLink'
            to={link.link}
            style={({ isActive }) => {
              return { color: isActive ? 'red' : '' };
            }}>
            {link.label}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Nav;
