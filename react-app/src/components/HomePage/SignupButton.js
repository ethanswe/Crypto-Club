import React from 'react'
import { NavLink } from 'react-router-dom';

const SignupButton = () => {
    return (
        <NavLink to="/sign-up" exact={true} activeClassName="active">
            <button >
            Sign Up
            </button >
        </NavLink>
    )
}

export default SignupButton
