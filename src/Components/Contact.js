import React from 'react'
import NavBar from './Components/NavBar';
import { 
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import NavBar from './NavBar';
function Contact() {
  function handleOnSubmit(event) {
    event.preventDefault();
    alert("Response submitted successfully we will respond to you as soon as possible.")
    prompt('How easy was it to navigate our page?')
  }
  return (
    <>
    <header>
    <NavBar/>
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
    <div className="flex justify-center p-20 space-x-9">
      <a
        href="#"
        className="text-blue-600 hover:text-blue-800 transition duration-100"
      >
        <FaFacebook size={30} />
      </a>
      <a
        href="#"
        className="text-blue-400 hover:text-blue-600 transition duration-100"
      >
        <FaTwitter size={30} />
      </a>
      <a
        href="#"
        className="text-blue-700 hover:text-white-900 transition duration-100"
      >
        <FaLinkedinIn size={30} />
      </a>
      <a
        href="#"
        className="text-red-500 hover:text-red-900 transition duration-100"
      >
        <FaInstagram size={30} />
      </a>
    </div>
  </div>
  </main>
  </>
  )
}

export default Contact