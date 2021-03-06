import './Nav.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Media from 'react-media';
import HamburgerNavMenu from '../HamburgerNavMenu';

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
    <div className='Nav'>
      <div className='Nav__Logo'>
        <NavLink to='/'>
          {({ isActive }) => (isActive ? 'LOGO' : 'HOME')}
        </NavLink>
      </div>
      <Media query={{ maxWidth: 776 }}>
        {(matches) =>
          matches ? (
            <HamburgerNavMenu />
          ) : (
            <div className='Nav__NavLinkContainer'>
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
          )
        }
      </Media>
    </div>
  );
};

export default Nav;
