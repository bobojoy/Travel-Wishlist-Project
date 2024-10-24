import React, { useState } from 'react';
import NavBar from './NavBar';
import DestinationList from './DestinationList';
import FormComponent from './Form';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Login from './Login';
// import SignIn from './SignIn';


function Home() {
	const [showForm, setShowForm] = useState(false);
	const [user, setUser] = useState(null); // Add user state

	const handleVideoClick = (e) => {
		e.preventDefault(); // Prevent any default action
		setShowForm((prev) => !prev); // Toggle form visibility
	};

	return (
		<div className='Home'>
			<header className='header'>
				<NavBar />
			</header>
			<main>
				<video
					autoPlay
					loop
					muted
					className='form-video'
					onClick={handleVideoClick}
				>
					<source
						src='https://cdn.pixabay.com/video/2020/04/21/36746-412873626_tiny.mp4'
						type='video/mp4'
					/>
				</video>

				{showForm && <FormComponent />}
				<h1 className='list'>Existing Destinations</h1>
				<DestinationList />
				{/* <Login setUser={setUser} /> Pass setUser to Login */}
				{/* <Signup /> */}
				{/* <SignIn/> */}
			</main>
			<footer className='bg-gray-200 py-footer-padding text-center'>
				<div className='social-media'>
					<ul className='list-none p-0 flex justify-center space-x-4'>
						<li className="media_links">
							<a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='facebook'>
								<FontAwesomeIcon icon={faFacebook} className='mr-2' />
							</a>
						</li>
						<li>
							<a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='twitter'>
								<FontAwesomeIcon icon={faTwitter} className='mr-2' />
							</a>
						</li>
						<li>
							<a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='instagram'>
								<FontAwesomeIcon icon={faInstagram} className='mr-2' />
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
}

export default Home;
