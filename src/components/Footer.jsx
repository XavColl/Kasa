import React from 'react';
import logo from '../assets/images/logo-white.png';

const Footer = () => {
    return (
        <footer className='Footer'>
            <img src={logo} alt='logo'></img>
            <p>© 2020 Kasa, All rights reserved</p>
        </footer>
    );
};

export default Footer;