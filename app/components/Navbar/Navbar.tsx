import React from 'react';
import { navLinks } from './Navlinks';

const Navbar = () => {
  return (
    <nav>
      <ul>
        {navLinks.map((item, i) => {
          return <li key={i}>{item.title}</li>;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
