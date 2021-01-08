import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
// import LogoutButton from './auth/LogoutButton';
import { useParams } from 'react-router-dom';

export const PortfolioNavigation = ({ user }) => {
    const { wallet_id } = useParams();
    return (
        <nav>
            <NavLink to="/wallet/:wallet_id" exact={true} activeClassName="active">
                Portfolio
            </NavLink>
            <NavLink to='/coins' exact={true} activeClassName="active">
                Coins
            </NavLink>
            <NavLink to='/swap' exact={true} activeClassName="active">
                Swap
            </NavLink>
        </nav>
    )
}

