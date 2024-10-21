import React, { useState } from "react";
import "../App.css";

const DestinationCard = ({ destination }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img src={destination.imageUrl} alt={destination.name} />
      <h3> {destination.name}</h3>
      {isExpanded && (
        <div className="details">
          <p>Country: {destination.country}</p>
          <p>Description: {destination.notes}</p>
        </div>
      )}
    </div>
  );
};

export default DestinationCard;
