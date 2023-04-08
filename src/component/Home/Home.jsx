import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Card from '../Card/Card';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
   
    return (
        <div className='home-container'>
            <div className='tshirts-continer'>
                {
                    tshirts.map(tshirt=> <Tshirt
                    key={tshirt._id}
                    tshirt={tshirt}
                    ></Tshirt>)
                }
            </div>
            <div className='card-container'>
                <Card></Card>
            </div>
        </div>
    );
};

export default Home;