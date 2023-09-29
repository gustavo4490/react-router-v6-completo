import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink className={"navbar-brand"} to = '/'>Home</NavLink>
        <NavLink className={"navbar-brand"} to = '/users'>Usuarios</NavLink>
        <NavLink className={"navbar-brand"} to = '/about'>Sobre nosotros</NavLink>
        <NavLink className={"navbar-brand"} to = '/dash'>Dash</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
