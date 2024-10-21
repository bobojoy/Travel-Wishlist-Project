import React from "react";
import NavBar from "./NavBar";


function BookingPage() {
  function handleOnBook(){
    alert("Successfully Booked!!")
  }
  return (
    <div className="booking">
      <>
        <NavBar />
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4">Book Your Appointment</h1>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <form>
              <div className="mb-0">
                <label
                  className="block text-gray-700 text-sm font-bold mb-0"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="namebox"
                  required
                />
              </div>

              <div className="mb-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-1"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@example.com"
                  className="emailbox"
                  required
                />
              </div>

              <div className="mb-8">
                <label
                  className="block text-gray-700 text-sm font-bold mb-8"
                  htmlFor="date"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="datebox"
                  required
                />
              </div>

              <div className="mb-7">
                <label
                  className="block text-gray-700 text-sm font-bold mb-7"
                  htmlFor="time"
                >
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  className="timebox"
                  required
                />
              </div>

              <div className="mb-9">
                <label
                  className="block text-gray-700 text-sm font-bold mb-9"
                  htmlFor="message"
                >
                  Additional Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Any additional information..."
                  className="notesbox"
                ></textarea>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={handleOnBook}
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    </div>
  );
}

export default BookingPage;
