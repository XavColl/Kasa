import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'

const Error = () => {
    return (
        <div className='Error'>
            <Header />
            <div>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to='/'>Retourner sur la page d'accueil</Link>
            </div>
        </div>
    );
};

export default Error;