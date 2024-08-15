import React, { useEffect, useState } from "react";
import DestinationCard from "./DestinationCard";

const DestinationList = () => {
  const [destination, setDestination] = useState([]);
  useEffect(()=> {
    fetch("http://localhost:3000/destination")
    .then((res)=> res.json())
    .then((data)=> setDestination(data))
  }, [])
  return(
   <div>
   {destination.map((des)=> (
<DestinationCard key={des.id} destination={des} />
   ))}
  </div>
);
};

export default DestinationList;
