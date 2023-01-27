import React from 'react';
import Card from './Card';
import Db from '../assets/db.json';
import { json } from 'react-router-dom';

const Gallery = () => {

    return (
        <div className='Gallery'> 
            {Db.map(item => {
                return <Card key={item.id} json={item} />
            })}
        </div>
    );
};

export default Gallery;