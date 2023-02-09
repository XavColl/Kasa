import React from 'react';

/** Component containing the informations of the host */

const Host = ({host}) => {

    if (host?.name){
        return (
        <div className='Host'>
            <p>{host.name}</p>
            <img src={host.picture} alt='Visage du propriétaire'></img>
        </div>
        );
    }else {
        return (
            <></>
        )
    }
};

export default Host;