import React from 'react';

/** Component for the banners in home and "a-propos" pages */

const Rectangle = ({src, textContent}) => {
    if(textContent){
        return (
            <section className='Rectangle'>
                <div className='Rectangle__image'>
                    <img src={src} alt=''></img>
                </div>
                <h1>{textContent}</h1>
            </section>
        );
    }
    else{
        return (
            <section className='Rectangle' style={{'marginBottom' : '50px'}}>
                <div className='Rectangle__image'>
                    <img src={src} alt=''></img>
                </div>
                <h1> </h1>
            </section>
        );
    } 
};

export default Rectangle;