import React from "react";
import NavBar from "NavBar";
import DestinationCard from "DestinationCard";
import DestinationList from "DestinationList";

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <DestinationCard />
        <DestinationList />
      </main>
      <footer className="bg-gray-200 py-footer-padding text-center">
        <div className="social-media">
          <ul className="list-none p-0 flex justify-center space-x-4">
            <li>
              <a
                href="https://www.facebook.com"
                target="-blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-facebook"
              >
                Facebook
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com"
                target="-blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-twitter"
              >
                Twitter
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com"
                target="-blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-instagram"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Home;
