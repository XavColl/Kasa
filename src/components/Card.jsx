import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({json}) => {


    if(json?.cover) {
        return (
            <Link to={`/logement/${json.id}`}> 
                <figure className='Card'>
                    <img src={json.cover} alt={json.title} />
                    <h2>{json.title}</h2>
                    <div className='cover-black'></div>
                </figure>
            </Link>
        );
    }else{
        return(<></>)
    }
};

export default Card;