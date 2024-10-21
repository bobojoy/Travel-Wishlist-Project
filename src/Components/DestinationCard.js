import React from "react";
import "../App.css";

const DestinationCard = ({ destination, isSelected, onClick }) => {
  return (
    <div className="card" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={destination.imageUrl} alt={destination.name} />
      <h3>{destination.name}</h3>
      {isSelected && (
        <div className="details">
          <p>Country: {destination.country}</p>
          <p>Description: {destination.notes}</p>
        </div>
      )}
    </div>
  );
};

export default DestinationCard;
