import React from "react";

const DestinationCard = ({ destination }) => {
  return (
    <div>
      <img src={destination.imageUrl} alt={destination.name} />
      <h3> Name : {destination.name}</h3>
      <p> Country : {destination.country}</p>
      <p> Notes : {destination.notes}</p>
    </div>
  );
};

export default DestinationCard;
