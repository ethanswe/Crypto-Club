import React from "react";
import { logout } from "../../services/auth";

const LogoutButton = ({authenticated, setAuthenticated}) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };
  return (
    <>
      { authenticated ?
        <button onClick={onLogout}>Logout</button>
      : "" }
    </>
  )
};

export default LogoutButton;
