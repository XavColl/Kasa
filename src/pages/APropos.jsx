import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Rectangle from '../components/Rectangle';
import sea from '../assets/images/sea.png'

const APropos = () => {
    return (
        <div className='A-Propos'>
            <Header />
            <Rectangle src={sea}></Rectangle>
            <Footer />
        </div>
    );
};

export default APropos;