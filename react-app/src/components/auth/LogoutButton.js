import React from "react";
import { logout } from "../../services/auth";

const LogoutButton = ({authenticated, setAuthenticated}) => {
  // console.log(authenticated);
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };
  return (
    <>
      { authenticated ?
        <button onClick={onLogout}>Logout</button>
      : null }
    </>
  )
};

export default LogoutButton;
