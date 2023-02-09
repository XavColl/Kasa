import React from 'react';
import { displayRating } from '../controllers/stars.controllers';


/** Component showing stars according to the rating */

const Stars = ({rating}) => {
    
    const listSrc = displayRating(rating);

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