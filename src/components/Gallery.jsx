import React from 'react';
import { useState } from 'react';
import Card from './Card';
import Db from '../assets/db.json';
import { useEffect } from 'react';

const Gallery = () => {

    const [page,setPage] = useState(0);
    const [cardsContent,setCardsContent] = useState([]);

    useEffect(() => {
        const fillCards = () => {
            let arr = [];
            for(let i=0; i<6 ;i++){
                if(Db[i + page * 6]){
                    arr.push(Db[i + page * 6]);
                }else arr.push({});
            }
            setCardsContent(arr);
        }

        fillCards()
    },[page])
    

    return (
        <div className='Gallery'> 
            <div className='Gallery__part'>
                <Card json={cardsContent[0]} />
                <Card json={cardsContent[1]} />
                <Card json={cardsContent[2]} />
            </div>
            <div className='Gallery__part'>
                <Card json={cardsContent[3]} />
                <Card json={cardsContent[4]} />
                <Card json={cardsContent[5]} />
            </div>
        </div>
    );
};

export default Gallery;