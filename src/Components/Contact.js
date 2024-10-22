import React from "react";
import NavBar from "./NavBar";
import phoneLogo from "./phone-logo.jpeg"; 
import whatsappLogo from "./whatsapp.jpeg";
import emailLogo from "./email-logo.jpeg"; 

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
// 	faFacebook,
// 	faTwitter,
// 	faInstagram,
// } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
		<div className='contact'>
			<>
				<header>
					<NavBar />
				</header>
				<main className='bg-contact p-8'>
					<div className='text-center'>
						<h2 className='text-2xl font-bold mb-3'>CONTACT US</h2>

						<div className='flex justify-center items-center mb-4'>
							<img
								src={phoneLogo}
								alt='Phone Logo'
								className='phone1'
							/>
							<span>
								You can reach us by phone at: <strong>0111428489</strong>
							</span>
						</div>

						<div className='flex justify-center items-center mb-4'>
							<img
								src={whatsappLogo}
								alt='WhatsApp Logo'
								className='phone2'
							/>
							<span>
								Connect with us on WhatsApp at: <strong>0764523242</strong>
							</span>
						</div>
					

						<div className='flex justify-center items-center mb-4'>
							<img
								src={emailLogo}
								alt='Email Logo'
								className='email'
							/>
							<span>
								For inquiries, email us at: <strong>travel@example.com</strong>
							</span>
						</div>
					</div>
				</main>
			</>
		</div>
	);
}

export default Contact;
