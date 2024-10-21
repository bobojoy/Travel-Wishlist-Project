import React from "react";
import '../App.css';

const DestinationCard = ({ destination }) => {
  return (
    <div className="card">
      <img src={destination.imageUrl} alt={destination.name} />
      <h3> Name : {destination.name}</h3>
      <p> Country : {destination.country}</p>
      <p> Notes : {destination.notes}</p>
    </div>
  );
};

export default DestinationCard;
