import React, { useState } from "react";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

function BookingPage() {
  const location = useLocation();
  const destination = location.state?.destination;

  const [bookings, setBookings] = useState([]);
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
      <>
        <NavBar />
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4">Book Your Appointment</h1>

          {destination && (
            <div>
              <h2>Destination: {destination.name}</h2>
              <p>Country: {destination.country}</p>
              <p>Description: {destination.notes}</p>
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
              type="email"
              placeholder="Email"
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

          <h2 className="text-2xl mt-4">Your Bookings</h2>
          <ul>
            {bookings.map((booking, index) => (
              <li key={index}>
                <p>
                  <strong>Destination:</strong> {booking.destination.name}{" "}
                  <br />
                  <strong>Name:</strong> {booking.name} <br />
                  <strong>Date:</strong> {booking.date} <br />
                  <strong>Time:</strong> {booking.time} <br />
                  <strong>Notes:</strong> {booking.notes} <br />
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </>
    </div>
  );
}

export default BookingPage;
