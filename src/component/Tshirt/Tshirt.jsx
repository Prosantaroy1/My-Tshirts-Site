import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt, handleAddCard}) => {
    //console.log(tshirt);
    const {name, picture, price} = tshirt;
    return (
        <div className='tshirt-container'>
            <img src={picture} alt='tshirt-images'/>
            <div className='tshirt-details'>
              <h4>{name}</h4>
              <p>${price}</p>
              <button onClick={() =>handleAddCard(tshirt)} className='btn'>Add Product</button>
            </div>
           
        </div>
    );
};

export default Tshirt;