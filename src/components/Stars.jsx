import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { displayRating } from '../controllers/stars.controllers';

const Stars = ({rating}) => {
    const [listSrc, setListSrc] = useState([]);

    useEffect(() => {
        setListSrc(displayRating(rating));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])



    if(listSrc.length>0){
        return (
        <div className='Stars'>
            <img src={listSrc[0]} alt='Etoile'></img>
            <img src={listSrc[1]} alt='Etoile'></img>
            <img src={listSrc[2]} alt='Etoile'></img>
            <img src={listSrc[3]} alt='Etoile'></img>
            <img src={listSrc[4]} alt='Etoile'></img>
        </div>
        );
    }else return <></>
};

export default Stars;