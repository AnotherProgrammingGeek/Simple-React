import React from 'react';
import './App.css';
import Navbar from './componants/Navbar/Navbar';
import Hero from './componants/Hero/Hero';
import Card from './componants/Card/Card';
import data from './data';

export default function App() {
  let cards = data.map((card)=>{
    return <Card
        key= {card.id}
        card = {card}
        // lable= {card.lable}
        // img = {`src/images/${card.coverImg}`}
        // rating = {card.stats.rating}
        // reviewCount= {card.stats.reviewCount}
        // location = {card.location}
        // title= {card.title}
        // price= {card.price}
        />
  })

  return (
    <>
      <Navbar/> 
      <Hero/>
      <div className='card-list'>
        {cards}
      </div>
      
    </>
  )
}

