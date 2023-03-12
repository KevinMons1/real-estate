import React from 'react';
import Card from "./card";

const CardsContainer = () => {
    return (
        <div className='cards grid grid__three grid__gap--md'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default CardsContainer;