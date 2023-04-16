import React from 'react';
import Maintance from './Maintance'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

function Services() {
  
  const navigate = useNavigate();

  function mov(){
    navigate(-1)
  }


  return (
    <>
      <div>Services</div>
      <ul>
          <li><NavLink to="maintanance"> Maintance </NavLink></li>
          <li><NavLink to="washing"> Washing </NavLink></li>
      </ul>
      <Outlet/>


      <button onClick={mov}>Go Back</button>
    </>
  )
}

export default Services