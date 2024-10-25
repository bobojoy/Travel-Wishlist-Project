import React, { useState } from "react";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

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
      destination: { name: "Santorini" },
    },
    {
      name: "Bob Smith",
      email: "bob@example.com",
      date: "2019-1-01",
      time: "10:00",
      notes: "",
      destination: { name: "Victoria Falls" },
    },
    {
      name: "Charlie Brown",
      email: "charlie@example.com",
      date: "2020-8-05",
      time: "09:00",
      notes: "Special requests for vegetarian meals.",
      destination: { name: "Nairobi National Park" },
    },
    {
      name: "Daisy Adams",
      email: "daisy@example.com",
      date: "2022-4-10",
      time: "11:30",
      notes: "",
      destination: { name: "Eiffel Tower" },
    },
    {
      name: "Eve Davis",
      email: "eve@example.com",
      date: "2023-11-15",
      time: "15:00",
      notes: "Need a guide.",
      destination: { name: "Lamu Island" },
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
      <>
        <NavBar />
        <div className="booking-container">
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
            <div className="Name">
              <input
                className="input"
                type="text"
                placeholder="Enter email address ..."
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="Name">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="Name">
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
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

export default Booking;
