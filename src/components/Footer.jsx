import React from 'react';
import logo from '../assets/images/logo-white.webp';

/** Component used on each page except the error, diplayed on the bottom  */

const Footer = () => {
    return (
        <footer className='Footer'>
            <img src={logo} alt='logo'></img>
            <p>© 2020 Kasa, All rights reserved</p>
        </footer>
    );
};

export default Footer;