import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import styled from 'styled-components';
import Logo from '../imgs/logo.jpg';

const Nav = styled.nav`
display: flex;
justify-content: flex-end;
/* align-items: center; */
flex-direction: row;
align-items: flex-end;
text-decoration: none;
/* margin: 0 auto; */
max-height: 50px;
background-color: black;
`
const Container = styled.div`
background-color: black;
`
const LogoNav = styled.img.attrs({
    src: `${Logo}`
})`
width: 80px;
height: 80px;
max-width: 80px;
max-height: 80px;
/* margin: 0 auto; */
display: flex;
`

const NavBar = ({ authenticated, setAuthenticated }) => {
  let location = useLocation();
  const currentPage = location.pathname;
  // console.log(currentPage);
  return (
    <Container>
      <NavLink to="/" exact={true} activeClassName="active">
        <LogoNav />
      </NavLink>
    <Nav>
    {currentPage === "/" ? 
      <>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
          <LogoutButton authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </>
        : ""}
      {currentPage === '/wallet' ?
        <>
          <LogoutButton authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </>
        : ""}
  
    </Nav >
    </Container>
  );
}

export default NavBar;