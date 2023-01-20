import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({json}) => {


    if(json?.cover) {
        return (
            <Link to={`/${json.id}`}> 
                <figure className='Card'>
                    <img src={json.cover} alt={json.title} />
                    <h2>{json.title}</h2>
                </figure>
            </Link>
        );
    }else{
        return(<></>)
    }
};

export default Card;