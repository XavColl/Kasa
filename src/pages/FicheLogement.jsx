import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../components/Carrousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Db from '../assets/db.json';
import Host from '../components/Host';
import Stars from '../components/Stars';
import arrow from '../assets/images/arrow.png'

const FicheLogement = () => {

    const { id } = useParams();

    const [lodging,setLodging] = useState({});

    useEffect(() => {
        const getLodgingFromId = () => {
            const output = Db.find(item => item.id === id);
            return output;
        }

        setLodging(getLodgingFromId())

    },[])



    if (lodging?.id) {
            return (
            <>
            <Header />
                <div className='FicheLogement'>
                    <Carrousel id={id} />
                    <div className='FicheLogement__header'>
                        <div className='FicheLogement__header__left'>
                            <h1>{lodging.title} </h1>
                            <p>{lodging.location}</p>
                            <ul>{lodging.tags.map(tag => {
                                return <li key={tag}>{tag}</li>
                            })}</ul>
                        </div>
                        <div className='FicheLogement__header__right'>
                            <Host host={lodging.host}/>
                            <Stars rating={lodging.rating} />
                        </div>
                    </div>
                    <main className='FicheLogement__main'>
                        <div className='FicheLogement__main__part'>
                            <div className='open'>
                                <h2>Description</h2>
                                <img src={arrow} alt='flèche'></img>
                            </div>
                            <p>{lodging.description}</p>
                        </div>
                        <div className='FicheLogement__main__part'>
                            <div className='open'>
                                <h2>Equipements</h2>
                                <img src={arrow} alt='flèche'></img>
                            </div>
                            <ul>{lodging.equipments.map(eq => {
                                return <li>{eq}</li>
                            })}</ul>
                        </div>
                    </main>
                </div>
                <Footer />
            </>
        );
    } else {
        return (
        <Header />
        )
    }
};

export default FicheLogement;