import React from 'react';
import Header from '../components/Header';
import Rectangle from '../components/Rectangle';
import seaImg from '../assets/images/sea.png';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className='Home'> 
            <Header />
            <Rectangle src={seaImg} textContent='Chez vous, partout et ailleurs'/>
            <Gallery />
            <Footer />
        </div>
    );
};

export default Home;