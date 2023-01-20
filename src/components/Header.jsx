import React from 'react';
import logo from '../assets/images/logo.png';
import '../App.scss';
import { Link } from 'react-router-dom';

const Header = () => {



    return (
        <header className='Header'>
            <img src={logo} alt='LOGO écrit avec une maison' className='Header__logo'></img>
            <nav className='Header__nav'>
                <Link to='/a-propos'>A propos</Link>
                <Link to='/'>Accueil</Link>
            </nav>
        </header>
    );
};

export default Header;