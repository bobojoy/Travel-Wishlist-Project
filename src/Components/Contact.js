import React from "react";
import NavBar from "./NavBar";
import phoneLogo from "./phone-logo.jpeg"; 
import whatsappLogo from "./whatsapp.jpeg";
import emailLogo from "./email-logo.jpeg"; 
import '../App.css'

function Contact() {
  return (
		<div className='contact'>
			<>
				<header>
					<NavBar />
				</header>
				<main className="contact-section">
  <div className="contact-content">
    <h2>CONTACT US</h2>

	
  </div>

  <div className="contact-container">
    <div className="contact-info">
      {/* Phone Contact */}
      <div className="box">
        <div className="icon">
          <img src={phoneLogo} alt="Phone" />
        </div>
        <span>
          You can reach us by phone at: <strong>011 142 8489</strong>
        </span>
      </div>

      {/* WhatsApp Contact */}
      <div className="box">
        <div className="icon">
          <img src={whatsappLogo} alt="WhatsApp" />
        </div>
        <span>
          Connect with us on WhatsApp at: <strong>076 452 3242</strong>
        </span>
      </div>

      {/* Email Contact */}
      <div className="box">
        <div className="icon">
          <img src={emailLogo} alt="Email" />
        </div>
        <span>
          For inquiries, email us at: <strong>travel@example.com</strong>
        </span>
      </div>
    </div>
  </div>
</main>

			</>
		</div>
	);
}

export default Contact;