import React, { useState } from "react";
import NavBar from "./NavBar";
import BookingCard from "./BookingCard";
import { useLocation } from "react-router-dom";
import '../App.css';

function Booking() {
  const location = useLocation();
  const destination = location.state?.destination;

  const initialBookings = [
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      date: "2018-10-30",
      time: "14:00",
      notes: "Looking forward to this trip!",
      destination: { name: "Santorini", country: "Greece" },
    },
    {
      name: "Bob Smith",
      email: "bob@example.com",
      date: "2019-01-01",
      time: "10:00",
      notes: " ",
      destination: { name: "Victoria Falls", country: "Zimbabwe" },
    },
    {
      name: "Charlie Brown",
      email: "charlie@example.com",
      date: "2020-08-05",
      time: "09:00",
      notes: "Special requests for vegetarian meals.",
      destination: { name: "Nairobi National Park", country: "Kenya" },
    },
    {
      name: "Daisy Adams",
      email: "daisy@example.com",
      date: "2022-04-10",
      time: "11:30",
      notes: " ",
      destination: { name: "Eiffel Tower", country: "France" },
    },
    {
      name: "Eve Davis",
      email: "eve@example.com",
      date: "2023-11-15",
      time: "15:00",
      notes: "Need a guide.",
      destination: { name: "Lamu Island", country: "Kenya" },
    },
  ];

  const [bookings, setBookings] = useState(initialBookings);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBook = (e) => {
    e.preventDefault();
    setBookings([...bookings, { ...formData, destination }]);
    alert("Successfully Booked!");
    setFormData({ name: "", email: "", date: "", time: "", notes: "" });
  };

  const handleDelete = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
  };

  return (
    <div className="booking">
      <header>
        <NavBar />
      </header>

      <div className="booking-container">
        <h1 className="text-3xl font-bold mb-4">Book Your Appointment</h1>

        {destination && (
          <div>
            <h2>Destination: {destination.name}</h2>
            <p>Country: {destination.country}</p>
            <p>Description: {destination.description}</p>
          </div>
        )}

        <form onSubmit={handleBook}>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="input"
            type="text"
            placeholder="Enter email address ..."
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Additional Notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
          <button type="submit">Book Now</button>
        </form>

        <h2 className="text-2xl mt-4">Bookings</h2>

        <div className="listcard">
          {bookings.map((booking, index) => (
            <BookingCard
              key={index}
              booking={booking}
              onDelete={() => handleDelete(index)}
              destination={booking.destination || destination}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Booking;