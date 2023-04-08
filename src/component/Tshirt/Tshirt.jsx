import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt}) => {
    //console.log(tshirt);
    const {name,_id, picture, price} = tshirt;
    return (
        <div className='tshirt-container'>
            <img src={picture} alt='tshirt-images'/>
            <h4>{name}</h4>
            <p></p>
        </div>
    );
};

export default Tshirt;