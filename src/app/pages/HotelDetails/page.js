import React from 'react';

const HotelDetails = () => {
  return (
    <div className="container mx-auto px-4 py-8">

      <div>
        <header>
          <div class="container">
            <nav class="navbar">
              <div class="logo">DevBhoomi <span>Yatra<b>.</b></span></div>
              <div class="nav-links">
                <a href="/pages/Destination">Destinations</a>
                <a href="/pages/About">About</a>
                <a href="/pages/Contact">Contact</a>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                  </svg>
                </a>
              </div>
              <div class="right-section">
                <a href="#!" class="btn btn-outline">Login</a>
                <a href="#!" class="btn">Sign Up</a>
              </div>
            </nav>
          </div>
        </header>
      </div>

      {/* Title Section */}
      <div className="flex m-10 flex-col lg:flex-row justify-between items-start lg:items-center">
        <div>
          <h1 className="text-2xl lg:text-4xl font-bold mb-2">
            Super Hotel O Tapovan Near Deacon Valley
          </h1>
          <div className="text-gray-600 mb-4">
            <span className="inline-block mr-2">⭐ 4.0</span>
            <span className="text-blue-600 underline cursor-pointer">Near Deacon Valley, Rishikesh</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
          Reserve
        </button>
      </div>

      {/* Main Section with Images and Sidebar */}
      <div className="flex flex-col lg:flex-row mt-8 gap-8">
        {/* Left Section - Images and Details */}
        <div className="lg:w-2/3">
          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <img
              src="https://via.placeholder.com/300"
              alt="Hotel Main"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Hotel Room"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Hotel Room"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Hotel Room"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Hotel Room"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Hotel Description */}
          <p className="text-gray-700 mb-4">
            Super Hotel O Tapovan Near Deacon Valley features air-conditioned rooms with TV in the River Rafting in Rishikesh district. Guests at the hotel can enjoy a continental breakfast. Popular points of interest near the hotel include the famous Himalayan Yoga Ashram and Patanjali International Yoga Foundation.
          </p>
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-1/3 bg-white p-4 rounded-lg shadow-lg">
          {/* Rating and Reviews */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">Wonderful</h2>
            <div className="flex items-center text-blue-600 mb-2">
              <span className="text-2xl font-bold">9.1</span>
              <span className="ml-2 text-sm text-gray-500">(109 reviews)</span>
            </div>
            <div className="text-sm text-gray-500">Guests loved the cleanliness and service</div>
          </div>

          {/* Property Highlights */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">Property Highlights</h2>
            <ul className="text-gray-700">
              <li>• Free Wifi</li>
              <li>• Family Rooms</li>
              <li>• Room Service</li>
              <li>• Breakfast</li>
            </ul>
          </div>

          {/* Location and Map */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">Location</h2>
            <p className="text-gray-700">Highly rated by recent guests</p>
            <div className="w-full h-40 bg-gray-200 rounded-lg mt-2">
              {/* Replace with a real map image or embed */}
              <img
                src="https://via.placeholder.com/150"
                alt="Map"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
