import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import arrow from '../assets/images/arrow.webp';

/** Component displaying each picture of a given lodging */

const Carrousel = ({id}) => {

    const [currentImage, setCurrentImage] = useState(0);
    const images = useLoaderData(id).pictures

    const nextImage = () => {
        if(currentImage>=images.length-1){
            setCurrentImage(0);
        }
        else setCurrentImage(currentImage + 1);
    }

    const prevImage = () => {
        if(currentImage<=0){
            setCurrentImage(images.length-1);
        }else setCurrentImage(currentImage - 1);
    }

    if (!images){
        return (
            <div className='Carrousel'>
            </div>
        );
    }
    if (images.length<=1){
        return(
            <div className='Carrousel'>
                <img src={images[currentImage]} alt='Parties du logement' ></img>
            </div>)
    }
    return(
        <div className='Carrousel'>
            <img src={images[currentImage]} alt='Parties du logement' ></img>
            <div className='arrowLeft' onClick={() => prevImage()}><img src={arrow} alt='Flèche pointant vers la gauche'></img></div>
            <div className='arrowRight' onClick={() => nextImage()}><img src={arrow} alt='Flèche pointant vers la droite'></img></div>
            <div className='marker'>{currentImage + 1}/{images.length}</div>
        </div>
    )
};

export default Carrousel;