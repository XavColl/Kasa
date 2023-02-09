import React from 'react';
import { useState } from 'react';
import arrow from '../assets/images/arrow.webp'

/** Component containing text, that can collapse */

const InfoBulle = ({title, content}) => {
    const [display,setDisplay] = useState(false)

    const changeDisplay = () => {
        setDisplay(!display)
    }

    return (
        <div className='InfoBulle' style={display?{'height':'auto'}:{}}>
            <div className='open' onClick={() => changeDisplay()}>
                <h2>{title}</h2>
                <img src={arrow} alt='flèche' style={display?{'transform' : 'rotate(180deg)'}:{'tranform' : 'rotate(0deg)'}}></img>
            </div>
            <p style={display?{'display' : 'block'}:{'display' : 'none'}}>{content}</p>
        </div>
    );
};

export default InfoBulle;