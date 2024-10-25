import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const DestinationCard = ({ destination, isSelected, onClick }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    // Show the SweetAlert confirmation
    Swal.fire({
      title: 'Confirm Booking',
      text: `Do you want to book a trip to ${destination.name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, book it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // Navigate to booking page if confirmed
        navigate(`/booking`, { state: { destination } });

        Swal.fire({
          title: "Kindly fill in the form to finish your booking ",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });

        
        
      }
    });
  };

  return (
    <div className="card" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={destination.image_url} alt={destination.name} />
      <h3>{destination.name}</h3>
      {isSelected && (
        <div className="detail">
          <p>Country: {destination.country}</p>
          <p>Description: {destination.description}</p>
          <p>{destination.name}</p>
          <button onClick={handleBookNow} >Book Now</button>
          
          
          
        </div>
      )}
      
    </div>
    
  );
 
};

export default DestinationCard;
