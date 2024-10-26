import React from "react";
import '../App.css'


function BookingCard({booking,onDelete,destination}) {
  return (
 
     
    <div className="detail">
      <p>Name: {booking.name} </p>
      <p>Date: {booking.date}</p>
      <p>Time: {booking.time}</p>
      <p>Note: {booking.notes}</p>
      {destination ? (
        <>
      <p>Country: {destination.country}</p>
      <p>Destination: {destination.name}</p>
    
      
      </>
      ):(
        <p> destination selected</p>
      )
}
        
      {onDelete && <button onClick={onDelete}>Delete</button>}
      
     
      
    </div>
   
  )
}

export default BookingCard