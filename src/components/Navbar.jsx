import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>

      <ul>
        <li><NavLink to="/"> Main </NavLink></li>
        <li><NavLink to="/services"> Services </NavLink></li>
        <li><NavLink to="/profile"> Profile </NavLink></li>
      </ul>



    </div>
  )
}

export default Navbar