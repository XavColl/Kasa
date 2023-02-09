import React from 'react';
import Card from './Card';

/** Component that shows each lodging available in db, shown in the home page */

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