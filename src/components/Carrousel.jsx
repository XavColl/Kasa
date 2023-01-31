import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Db from '../assets/db.json';
import arrow from '../assets/images/arrow.png';

const Carrousel = ({id}) => {

    const [images,setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);

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

    useEffect(() => {
        const item = Db.find(lodge => lodge.id === id);
        
        setImages(item.pictures);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!images){
        return (
            <div className='Carrousel'>
            </div>
        );
    }else {
        return(
            <div className='Carrousel'>
                <img src={images[currentImage]} alt='Parties du logement' ></img>
                <div className='arrowLeft' onClick={() => prevImage()}><img src={arrow} alt='Flèche pointant vers la gauche'></img></div>
                <div className='arrowRight' onClick={() => nextImage()}><img src={arrow} alt='Flèche pointant vers la droite'></img></div>
                <div className='marker'>{currentImage + 1}/{images.length}</div>
            </div>
        )
    }
};

export default Carrousel;