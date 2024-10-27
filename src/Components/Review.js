import React, { useState } from "react";
import NavBar from "./NavBar";
import '../App.css';

function Review() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  function handleOnSubmit(event) {
    event.preventDefault();
    const newReview = {
      name,
      reviewText,
    };
    setReviews([...reviews, newReview]);
    setName("");
    setReviewText("");
    alert("Review submitted successfully. Thank you for your  feedback!");
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            
              <textarea
                placeholder="Your review"
                className="w-1/2 p-2 border rounded h-24"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
              <div>
                <input
                  className="animate-bounce bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                  type="submit"
                  value="Submit Review"
                />
              </div>
            </form>
            <div className="review-div">
              <h3 className="h3-review">Reviews:</h3>
              <ul className="ul-review">
                {reviews.map((review, index) => (
                  <li key={index} className="li-review">
                    <p className="p-review"><strong> Name:   </strong>  {review.name}</p>
                    <p className="nb , text-black">  <strong>  your review : </strong>   
                    
                          {review.reviewText}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </>
    </div>
  );
}

export default Review;
