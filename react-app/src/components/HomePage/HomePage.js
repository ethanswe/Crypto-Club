import React from 'react';
import { Redirect } from "react-router-dom";

import MainDiv from './MainDiv';
import "./homepage.css";

const HomePage = ({ authenticated }) => {
    if (authenticated) {
    return <Redirect to='/wallet' />
  }
    return (
        <div>
            <MainDiv />
        </div>
    )
}

export default HomePage
