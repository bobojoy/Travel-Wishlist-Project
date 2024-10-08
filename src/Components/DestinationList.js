import React, { useEffect, useState } from "react";
import DestinationCard from "./DestinationCard";

const DestinationList = () => {
  const [destination, setDestination] = useState([]);
  useEffect(()=> {
    fetch("https://travel-wish-list-backend.vercel.app/destinations")
      .then((res) => res.json())
      .then((data) => setDestination(data));
  }, [])
  return(
   <div className= "listcard">
   {destination.map((des)=> (
<DestinationCard key={des.id} destination={des} />
   ))}
  </div>
);
};

export default DestinationList;
