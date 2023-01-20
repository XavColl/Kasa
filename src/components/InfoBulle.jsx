import React from 'react';
import { useState } from 'react';
import arrow from '../assets/images/arrow.png'

const InfoBulle = ({title, content}) => {
    const [display,setDisplay] = useState(true)

    const changeDisplay = () => {
        setDisplay(!display)
    }

    return (
        <div className='InfoBulle' style={display?{}:{'height' : '50px'}}>
            <div className='open' onClick={() => changeDisplay()}>
                <h2>{title}</h2>
                <img src={arrow} alt='flèche' style={display?{'transform' : 'rotate(180deg)'}:{'tranform' : 'rotate(0deg)'}}></img>
            </div>
            <p style={display?{'opacity' : '1'}:{'opacity' : '0'}}>{content}</p>
        </div>
    );
};

export default InfoBulle;