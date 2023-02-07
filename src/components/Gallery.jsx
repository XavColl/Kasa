import React from 'react';
import Card from './Card';

const Gallery = ({db}) => {

    return (
        <div className='Gallery'> 
            {db.map(item => {
                return <Card key={item.id} json={item} />
            })}
        </div>
    );
};

export default Gallery;