import React from "react";
export default function Card(props){
  console.log(props);
  return (
    <div className="card">
        <span className="card--lable">{props.card.lable}</span>
        <img className="card--pic" src={`src/images/${props.card.coverImg}`} alt="sports" />
        <div className="card--rate">
            <img width="12px" height="12px" src="src/images/Star 1.png" alt="star" />
            <span>{props.card.stats.rating}</span>
            <span className="gray">({props.card.stats.reviewCount}) • </span>
            <span className="gray">{props.card.location}</span>
        </div>
        <span className="card--txt">{props.card.title}</span>
        <span className="card--price"><b>From ${props.card.price}</b> / person</span>
    </div>
  )
};

