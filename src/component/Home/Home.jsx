import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Card from '../Card/Card';
import './Home.css'
import toast  from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    //btn evenhandler
    const [card, setCard] = useState([]);
    const handleAddCard = tshirt => {
        //cheek to button double click
        const exists = card.find(ts => ts._id === tshirt._id);
        if(exists){
           toast('already add card T-Shirts !!!');
        }
        else{
           const newCard = [...card, tshirt];
           setCard(newCard);
        }
        
    }
    const handleRemoveCard = id =>{
        const remaining = card.filter(ts => ts._id !==id);
        setCard(remaining);
    }
    //console.log(card)
    return (
        <div className='home-container'>
            <div className='tshirts-continer'>
                {
                    tshirts.map(tshirt=> <Tshirt
                    key={tshirt._id}
                    tshirt={tshirt}
                    handleAddCard={handleAddCard}
                    ></Tshirt>)
                }
            </div>
            <div className='card-container'>
                <Card card={card}
                handleRemoveCard={handleRemoveCard}
                ></Card>
            </div>
        </div>
    );
};

export default Home;