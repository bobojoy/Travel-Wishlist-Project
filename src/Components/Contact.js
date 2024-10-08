import React from "react";

import NavBar from "./NavBar";
function Contact() {
  function handleOnSubmit(event) {
    event.preventDefault();
    alert(
      "Response submitted successfully we will respond to you as soon as possible."
    );
    prompt("How easy was it to navigate our page?");
  }
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <div className='bg-[url("https://img.freepik.com/free-photo/top-view-blue-monday-concept-composition-with-telephone_23-2149139103.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybrid")] bg-cover bg-center h-screen'>
          <h2 className="italic text bg-gray-800 text-2xl font-bold mb-4">
            Get In Touch
          </h2>
          <form className="space-y-9" onSubmit={handleOnSubmit}>
            <input
              className="w-full p-2 border rounded bg-gray-700"
              type="text"
              placeholder="Name"
            ></input>
            <input
              className="w-full p-2 border rounded bg-gray-700"
              type="text"
              placeholder="Email"
            ></input>

            <textarea
              placeholder="Your message"
              className=" w-1/2 p-2 border rounded h-24"
            ></textarea>
            <div>
              <input
                className="animate-bounce bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                type="submit"
                value="Submit Response"
              ></input>
            </div>
          </form>
             
          


        </div>
      </main>
    </>
  );
}

export default Contact;
