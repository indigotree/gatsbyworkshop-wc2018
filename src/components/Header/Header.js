import React from 'react';

import Navbar from '../Navbar/Navbar';
import Logo from './Logo';

import './Header.css';

export default ({ name, description }) => (
    <header className="header" role="banner">
        <Logo name={name} description={description} />
        <Navbar />
    </header>
);
