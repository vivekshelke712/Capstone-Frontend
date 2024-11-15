import React from 'react'
import IndiraLogo from '../assets/IndiraLogo.png'
import aidbridge from '../assets/aidbridge.webp'
const HomeAbout = () => {
  return <>
  <div className="aidbridge-container max-w-5xl mx-auto p-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="text-content md:w-1/2">
          <p className="text-sm text-gray-500 uppercase">About AidBridge</p>
          <h2 className="text-3xl font-bold mt-2 mb-4">
            Bridging Needs with Support, One Connection at a Time
          </h2>
          <p className="text-gray-600 mb-4">
            AidBridge is dedicated to connecting people in need with supportive
            organizations and volunteers. From orphanages to NGOs and municipal
            bodies, we bridge the gap to provide timely help and resources.
          </p>
          <p className="text-gray-600 mb-6">
            With a volunteer-driven registration system and administrative
            oversight, we ensure every request reaches the right support network,
            empowering communities through efficient, responsive connections.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Learn More
          </button>
        </div>

        {/* Video/Media Section */}
        <div className="media-content md:w-1/2 relative">
          <img
            src={aidbridge} // Replace with an actual image or video thumbnail relevant to AidBridge
            alt="AidBridge introduction thumbnail"
            className="rounded-lg w-full"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white rounded-full p-3 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-blue-500"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Supporters Section */}
      <div className="supporters mt-12 text-center">
        <p className="text-gray-500 uppercase text-sm mb-4">Our Supporting Partners</p>
        <div className="flex justify-center gap-6">
          {/* Placeholder logos, replace with actual logos of supporting organizations */}
          {Array(6).fill().map((_, index) => (
            <img
              key={index}
              src={IndiraLogo} // Replace with actual logo URLs of supporting organizations
              alt={`Partner Logo ${index + 1}`}
              className="w-20 h-10 opacity-50"
            />
          ))}
        </div>
      </div>
    </div>
  </>
}

export default HomeAbout