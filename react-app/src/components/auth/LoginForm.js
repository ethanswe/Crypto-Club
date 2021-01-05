import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import LoginBackground from '../../public/homePage.jpg';
import styled from 'styled-components'

const HomePageContainer = styled.div`
/* grid-template-areas:
'b b a a '
'b b a a';
grid-template-rows: 540px 540px;
grid-template-columns: 480px 480px 480px 480px; */
display: flex;
justify-content: space-between;
`

const ImgContainer = styled.div`
width: 60vw;
height: 50vw;
grid-area: b;
/* left: 0; */

`

const LoginBackgroundImg = styled.img`
background-image: url(${LoginBackground});
width: 100%;
height: 100%;
background-size: cover;

`

const StyledLoginForm = styled.form`
/* background-color: black; */
width: 1000px;
height: 1000px;
`

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <HomePageContainer>
      <ImgContainer>
        <LoginBackgroundImg />
      </ImgContainer>
    <StyledLoginForm onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button type="submit">Login</button>
      </div>
      </StyledLoginForm>
    </HomePageContainer>
  );
};

export default LoginForm;
