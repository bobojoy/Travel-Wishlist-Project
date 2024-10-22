import React from "react";
import { useNavigate } from "react-router-dom";

const DestinationCard = ({ destination, isSelected, onClick }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/booking`, { state: { destination } });
  };

  return (
    <div className="card" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={destination.imageUrl} alt={destination.name} />
      <h3>{destination.name}</h3>
      {isSelected && (
        <div className="detail">
          <p>Country: {destination.country}</p>
          <p>Description: {destination.notes}</p>
          <p>{destination.name}</p>
          <button onClick={handleBookNow}>Book Now</button>
        </div>
      )}
    </div>
  );
};

export default DestinationCard;
