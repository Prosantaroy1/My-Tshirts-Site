import React from 'react';


const Card = ({card, handleRemoveCard}) => {
    return (
        <div>
            <h2>Order Review: {card.length}</h2>
            {
                card.map(tshirt=><p
                key={tshirt._id}
                  >
                    {tshirt.name} 
                    <button
                    onClick={() =>handleRemoveCard(tshirt._id)}
                    >Deleted</button>
                    </p>)
            }
        </div>
    );
};

export default Card;