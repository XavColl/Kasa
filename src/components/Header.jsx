import React from 'react';
import logo from '../assets/images/logo.webp';
import '../App.scss';
import { Link } from 'react-router-dom';

const Header = () => {

/** Component displayed in each page, on the top */

    return (
        <header className='Header'>
            <Link to='/'>
                <img src={logo} alt='LOGO écrit avec une maison' className='Header__logo'></img>
            </Link>
            <nav className='Header__nav'>
                <Link to='/'>Accueil</Link>
                <Link to='/a-propos'>A propos</Link>
            </nav>
        </header>
    );
};

export default Header;