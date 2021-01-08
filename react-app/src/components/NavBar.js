import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import styled from 'styled-components';
import Logo from '../imgs/logo.jpg';

const Nav = styled.nav`
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: row;
text-decoration: none;
/* margin: 0 auto; */
max-height: 60px;
top: 0;
background-color: black;
`
const Container = styled.div`
background-color: black;
max-height: 60px;
`
const LogoNav = styled.img.attrs({
    src: `${Logo}`
})`
width: 75px;
height: 60px;
max-width: 75px;
max-height: 60px;
position: relative;
/* margin: 0 auto; */
`

const NavBar = ({ authenticated, setAuthenticated }) => {
  let location = useLocation();
  const currentPage = location.pathname;
  // console.log(currentPage);
  return (
    <Container>
    <Nav>
    {currentPage === "/" ? 
      <>
      <NavLink to="/" exact={true} activeClassName="active">
        <LogoNav />
      </NavLink>
            <NavLink to="/login" exact={true} activeClassName="active">
              <Buttons>
                Login
              </Buttons>
          </NavLink>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
              <Buttons>
                Sign Up
              </Buttons>
          </NavLink>
          <LogoutButton authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </>
        : ""}
      {currentPage === '/wallet' ?
        <>
              <LogoNav />
            <LogoutButton authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </>
        : ""}
  
    </Nav >
    </Container>
  );
}

export default NavBar;

const Buttons = styled.button`
  border-color: black;
  margin: 2px;
  margin-right: 2px;
  background-color: black;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 150ms ease-in-out;
  text-decoration: none;
  background: #222;
  height: 28px;
  min-width: 80px;
  border: none;
  border-radius: 10px;
  color: #eee;
  font-size: 15px;
  position: relative;
  transition: 1s;
  -webkit-tap-highlight-color: transparent;
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: black;
    z-index: -1;
    transition: width 150ms ease-in-out;
  }
  
  &:hover {
    color: #fff;
    &:after {
      width: 110%;
    }
  }
`