import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = ({ setAuthenticated }) => {
  let location = useLocation();
  const currentPage = location.pathname;
  console.log(currentPage);
  return (
    <nav>
    {currentPage === "/" ? 
      <>
          <NavLink to="/" exact={true} activeClassName="active">
        Home
          </NavLink>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </>
      : ''}
    </nav >

  );
}

export default NavBar;