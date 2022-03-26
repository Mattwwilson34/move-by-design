import './HamburgerNavMenu.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import hamburgerSvg from '../../Icons/bars-solid.svg';

const HamburgerNavMenu = () => {
  const [open, setOpen] = useState(false);

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

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='HamburgerNavMenu'>
      <img onClick={handleClick} src={hamburgerSvg} alt='hamburger menu'></img>
      {open ? (
        <div className='HamburgerNavMenu__NavLinkContainer'>
          {links.map((link) => {
            return (
              <NavLink
                key={link.link}
                className='HamburgerNavMenu__NavLink'
                to={link.link}
                style={({ isActive }) => {
                  return { color: isActive ? 'red' : '' };
                }}>
                {link.label}
              </NavLink>
            );
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default HamburgerNavMenu;
