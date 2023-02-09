import React from 'react';
import Header from '../components/Header';
import Rectangle from '../components/Rectangle';
import seaImg from '../assets/images/sea.webp';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import { getDb } from '../controllers/home.controller';
import { useLoaderData } from 'react-router-dom';

/** Home page, containing gallery */

const Home = () => {
    const db = useLoaderData()

    return (
        <div className='Home'> 
            <Header />
            <Rectangle src={seaImg} textContent='Chez vous, partout et ailleurs'/>
            <Gallery db={db}/>
            <Footer />
        </div>
    );
};

export default Home;

export const loader = async () => {
    return getDb()
}