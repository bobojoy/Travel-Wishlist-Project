import React, { useEffect, useState } from "react";
import DestinationCard from "./DestinationCard";

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/destinations")
      .then((res) => res.json())
      .then((data) => setDestinations(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="listcard">
      {destinations.map((des) => (
        <DestinationCard key={des.id} destination={des} />
      ))}
    </div>
  );
};

export default DestinationList;
