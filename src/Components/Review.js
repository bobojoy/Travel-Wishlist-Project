import React from "react";
import NavBar from "./NavBar";

function Review() {
  function handleOnSubmit(event) {
    event.preventDefault();
    alert(
      "Response submitted successfully. We will respond to you as soon as possible."
    );
    prompt("How easy was it to navigate our page?");
  }

  return (
    <div className="review">
      <>
        <header>
          <NavBar />
        </header>
        <main className="main-review">
          <div className="container mx-auto p-6">
            <h2 className="italic text bg-gray-800 text-2xl font-bold mb-4">
              Leave a Review
            </h2>
            <form className="space-y-9" onSubmit={handleOnSubmit}>
              <input
                className="w-full p-2 border rounded bg-gray-700"
                type="text"
                placeholder="Name"
              />
              <input
                className="w-full p-2 border rounded bg-gray-700"
                type="text"
                placeholder="Email"
              />
              <textarea
                placeholder="Your review"
                className="w-1/2 p-2 border rounded h-24"
              />
              <div>
                <input
                  className="animate-bounce bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                  type="submit"
                  value="Submit Review"
                />
              </div>
            </form>
          </div>
        </main>
      </>
    </div>
  );
}

export default Review;
