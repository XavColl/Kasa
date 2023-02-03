import React from 'react';
import { useState } from 'react';
import { Navigate, useLoaderData, useParams } from 'react-router-dom';

import Carrousel from '../components/Carrousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Host from '../components/Host';
import Stars from '../components/Stars';
import arrow from '../assets/images/arrow.png';
import { getLodgingFromId } from '../controllers/ficheLogement.controller';

const FicheLogement = () => {
    const [viewDescription,setViewDescription] = useState(true);
    const [viewEquipments, setViewEquipments] = useState(true);
    const { id } = useParams();  

    const lodging = useLoaderData(id)


    const displayDescription = () => {
        setViewDescription(!viewDescription);
    }

    const displayEquipments = () => {
        setViewEquipments(!viewEquipments);
    }



    if (lodging?.tags) {
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
                            <p style={viewDescription?{'display' : 'block'}:{'display' : 'none'}} >{lodging.description}</p>
                        </div>
                        <div className='FicheLogement__main__part' style={viewEquipments?{'height' : '250px'}:{'height' : '10px'}} >
                            <div className='open' onClick={() => displayEquipments()}>
                                <h2>Equipements</h2>
                                <img src={arrow} alt='flèche' style={viewEquipments?{'transform' : 'rotate(180deg)'}:{'tranform' : 'rotate(0deg)'}}></img>
                            </div>
                            <ul style={viewEquipments?{'display' : 'block'}:{'display' : 'none'}} >{lodging.equipments.map(eq => {
                                return <li key={eq} >{eq}</li>
                            })}</ul>
                        </div>
                    </main>
                </div>
                <Footer />
            </>
        );
    } else if(lodging === false){
        return (
            <Navigate to="/404" replace={true}></Navigate>
        )
    }else return <></>
};

export default FicheLogement;

export const loader = async (id) => {
    return getLodgingFromId(id);
}