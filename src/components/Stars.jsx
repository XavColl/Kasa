import React from 'react';
import { useState } from 'react';
import star from '../assets/images/star.svg';
import nostar from '../assets/images/no-star.svg';
import { useEffect } from 'react';

const Stars = ({rating}) => {
    const [listSrc, setListSrc] = useState([]);

    useEffect(() => {
        let arr = [];
        for(let i = 0; i<5; i++){
            if(i<rating){
                arr.push(star)
            }else arr.push(nostar)
        }
        setListSrc(arr);
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