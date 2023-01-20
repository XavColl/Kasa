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
    const [viewDescription,setViewDescription] = useState(true);
    const [viewEquipments, setViewEquipments] = useState(true);

    const { id } = useParams();

    const [lodging,setLodging] = useState({});

    useEffect(() => {
        const getLodgingFromId = () => {
            const output = Db.find(item => item.id === id);
            return output;
        }

        setLodging(getLodgingFromId())

    },[])

    const displayDescription = () => {
        setViewDescription(!viewDescription)
    }

    const displayEquipments = () => {
        setViewEquipments(!viewEquipments)
    }



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
                        <div className='FicheLogement__main__part' style={viewDescription?{'height' : '250px'}:{'height' : '10px'}}>
                            <div className='open' onClick={() => displayDescription()}>
                                <h2>Description</h2>
                                <img src={arrow} alt='flèche' style={viewDescription?{'transform' : 'rotate(180deg)'}:{'tranform' : 'rotate(0deg)'}}></img>
                            </div>
                            <p style={viewDescription?{'opacity' : '1'}:{'opacity' : '0'}} >{lodging.description}</p>
                        </div>
                        <div className='FicheLogement__main__part' style={viewEquipments?{'height' : '250px'}:{'height' : '10px'}} >
                            <div className='open' onClick={() => displayEquipments()}>
                                <h2>Equipements</h2>
                                <img src={arrow} alt='flèche' style={viewEquipments?{'transform' : 'rotate(180deg)'}:{'tranform' : 'rotate(0deg)'}}></img>
                            </div>
                            <ul style={viewEquipments?{'opacity' : '1'}:{'opacity' : '0'}} >{lodging.equipments.map(eq => {
                                return <li key={eq} >{eq}</li>
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