import React from 'react';
import Card from './Card';
import Db from '../assets/db.json';

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