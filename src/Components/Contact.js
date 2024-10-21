import React from "react";
import NavBar from "./NavBar";
import phoneLogo from "./phone-logo.jpeg"; 
import whatsappLogo from "./whatsapp-logo.jpeg";
import emailLogo from "./email-logo.jpeg"; 

function Contact() {
  return (
    <div className="contact">
      <>
        <header>
          <NavBar />
        </header>
        <main className="bg-contact p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
            <p className="mb-6">
              We love to talk to you! Here is how you can reach us:
            </p>

            <div className="flex justify-center items-center mb-4">
              <img src={phoneLogo} alt="Phone Logo" className="phone1" />
              <span>
                You can find us on Phone at: <strong>0111428489</strong>
              </span>
            </div>

            <div className="flex justify-center items-center mb-4">
              <img src={whatsappLogo} alt="WhatsApp Logo" className="phone2" />
              <span>
                You can find us on WhatsApp at: <strong>0764523242</strong>
              </span>
            </div>

            <div className="flex justify-center items-center mb-4">
              <img src={emailLogo} alt="Email Logo" className="email" />
              <span>
                You can reach us via Email at:{" "}
                <strong>travel@example.com</strong>
              </span>
            </div>
          </div>
        </main>
      </>
    </div>
  );
}

export default Contact;
