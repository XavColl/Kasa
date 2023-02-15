import React from 'react';
import { Navigate, useLoaderData, useParams } from 'react-router-dom';

import Carrousel from '../components/Carrousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Host from '../components/Host';
import Stars from '../components/Stars';
import { getLodgingFromId } from '../controllers/ficheLogement.controller';
import InfoBulle from '../components/InfoBulle';

/** Page reachable through url with apropriate id, displayed on the click on one of the card in gallery */

const FicheLogement = () => {
    const { id } = useParams();  

    const lodging = useLoaderData(id)

    console.log(lodging.description)

    // Preolading pictures for a given lodging

    lodging.pictures.forEach(img => {
        const image = new Image();
        image.src = img
    })



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
                            <InfoBulle title='Description' content={lodging.description} />
                            <InfoBulle title='Equipements' content={lodging.equipments}> </InfoBulle>
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