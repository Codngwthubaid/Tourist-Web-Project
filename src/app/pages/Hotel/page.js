"use client"
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import FilterSidebar from "@/components/FilterSidebar"
const page = () => {


  const [filteredData, setFilteredData] = useState([]);
  const [data] = useState([
    { id: 1, name: 'Hotel A', starRating: 5, reviewScore: 9 },
    { id: 2, name: 'Hotel B', starRating: 4, reviewScore: 8.5 },
    { id: 3, name: 'Hotel C', starRating: 3, reviewScore: 7 },
    { id: 4, name: 'Hotel D', starRating: 2, reviewScore: 6 },
    { id: 5, name: 'Hotel E', starRating: 1, reviewScore: 5.5 },
  ]);

  const filters = {
    starRating: [5, 4, 3, 2, 1],
    reviewScore: ['Wonderful: 9+', 'Very Good: 8+', 'Good: 7+', 'Pleasant: 6+'],
  };

  const handleFilterChange = (selectedFilters) => {
    let filtered = data;

    if (selectedFilters.starRating.length > 0) {
      filtered = filtered.filter((item) =>
        selectedFilters.starRating.includes(item.starRating)
      );
    }

    if (selectedFilters.reviewScore.length > 0) {
      filtered = filtered.filter((item) => {
        return selectedFilters.reviewScore.some((score) => {
          if (score === 'Wonderful: 9+') return item.reviewScore >= 9;
          if (score === 'Very Good: 8+') return item.reviewScore >= 8;
          if (score === 'Good: 7+') return item.reviewScore >= 7;
          if (score === 'Pleasant: 6+') return item.reviewScore >= 6;
        });
      });
    }

    setFilteredData(filtered);
  };
  return (
    <div>
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
      <div>

        <h2 className="text-3xl font-bold tracking-tighter m-10 sm:text-4xl md:text-5xl mb-8">Near By : Hotels</h2>

        <section className='border border-red-600 flex'>
          <div>
            <div className="border m-10 rounded-lg shadow-lg p-4 flex max-w-2xl">
              {/* Left Section - Image */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/hotel.jpg" // Replace this with your image
                  alt="Hotel"
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Right Section - Content */}
              <div className="ml-4 flex-grow">
                {/* Title and Location */}
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-blue-700">
                    Super Hotel O Tapovan Near Deacon Valley
                  </h2>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-500 text-xl font-semibold">★</span>
                    <span className="font-semibold">Wonderful</span>
                    <span className="bg-blue-700 text-white text-sm px-2 py-1 rounded-lg font-bold">9.1</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500">
                  Hotel in River Rafting in Rishikesh, Rishikesh
                </p>

                {/* Description */}
                <p className="text-gray-700 mt-2">
                  Super Hotel O Tapovan Near Deacon Valley features air-conditioned rooms
                  with TV in the River Rafting in Rishikesh district of Rishikesh. Bed was
                  too good. Nice hotel, good experience, a very warm staff...
                  <a href="#" className="text-blue-600"> Show more</a>
                </p>

                {/* Price and Button */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-green-700 text-xl font-semibold">
                    ₹ 1,379.83 <span className="text-sm text-gray-500">per night</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Check availability
                  </button>
                </div>
              </div>
            </div>

            <div className="border m-10 rounded-lg shadow-lg p-4 flex max-w-2xl">
              {/* Left Section - Image */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/hotel.jpg" // Replace this with your image
                  alt="Hotel"
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Right Section - Content */}
              <div className="ml-4 flex-grow">
                {/* Title and Location */}
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-blue-700">
                    Super Hotel O Tapovan Near Deacon Valley
                  </h2>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-500 text-xl font-semibold">★</span>
                    <span className="font-semibold">Wonderful</span>
                    <span className="bg-blue-700 text-white text-sm px-2 py-1 rounded-lg font-bold">9.1</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500">
                  Hotel in River Rafting in Rishikesh, Rishikesh
                </p>

                {/* Description */}
                <p className="text-gray-700 mt-2">
                  Super Hotel O Tapovan Near Deacon Valley features air-conditioned rooms
                  with TV in the River Rafting in Rishikesh district of Rishikesh. Bed was
                  too good. Nice hotel, good experience, a very warm staff...
                  <a href="#" className="text-blue-600"> Show more</a>
                </p>

                {/* Price and Button */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-green-700 text-xl font-semibold">
                    ₹ 1,379.83 <span className="text-sm text-gray-500">per night</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    <Link href="/pages/HotelDetails/HotelDetailsFirst">
                      Check availability
                    </Link>
                  </button>
                </div>
              </div>
            </div>

            <div className="border m-10 rounded-lg shadow-lg p-4 flex max-w-2xl">
              {/* Left Section - Image */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/hotel.jpg" // Replace this with your image
                  alt="Hotel"
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Right Section - Content */}
              <div className="ml-4 flex-grow">
                {/* Title and Location */}
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-blue-700">
                    Super Hotel O Tapovan Near Deacon Valley
                  </h2>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-500 text-xl font-semibold">★</span>
                    <span className="font-semibold">Wonderful</span>
                    <span className="bg-blue-700 text-white text-sm px-2 py-1 rounded-lg font-bold">9.1</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500">
                  Hotel in River Rafting in Rishikesh, Rishikesh
                </p>

                {/* Description */}
                <p className="text-gray-700 mt-2">
                  Super Hotel O Tapovan Near Deacon Valley features air-conditioned rooms
                  with TV in the River Rafting in Rishikesh district of Rishikesh. Bed was
                  too good. Nice hotel, good experience, a very warm staff...
                  <a href="#" className="text-blue-600"> Show more</a>
                </p>

                {/* Price and Button */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-green-700 text-xl font-semibold">
                    ₹ 1,379.83 <span className="text-sm text-gray-500">per night</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Check availability
                  </button>
                </div>
              </div>
            </div>

            <div className="border m-10 rounded-lg shadow-lg p-4 flex max-w-2xl">
              {/* Left Section - Image */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/hotel.jpg" // Replace this with your image
                  alt="Hotel"
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Right Section - Content */}
              <div className="ml-4 flex-grow">
                {/* Title and Location */}
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-blue-700">
                    Super Hotel O Tapovan Near Deacon Valley
                  </h2>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-500 text-xl font-semibold">★</span>
                    <span className="font-semibold">Wonderful</span>
                    <span className="bg-blue-700 text-white text-sm px-2 py-1 rounded-lg font-bold">9.1</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500">
                  Hotel in River Rafting in Rishikesh, Rishikesh
                </p>

                {/* Description */}
                <p className="text-gray-700 mt-2">
                  Super Hotel O Tapovan Near Deacon Valley features air-conditioned rooms
                  with TV in the River Rafting in Rishikesh district of Rishikesh. Bed was
                  too good. Nice hotel, good experience, a very warm staff...
                  <a href="#" className="text-blue-600"> Show more</a>
                </p>

                {/* Price and Button */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-green-700 text-xl font-semibold">
                    ₹ 1,379.83 <span className="text-sm text-gray-500">per night</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Check availability
                  </button>
                </div>
              </div>
            </div>

            <div className="border m-10 rounded-lg shadow-lg p-4 flex max-w-2xl">
              {/* Left Section - Image */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/hotel.jpg" // Replace this with your image
                  alt="Hotel"
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Right Section - Content */}
              <div className="ml-4 flex-grow">
                {/* Title and Location */}
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-blue-700">
                    Super Hotel O Tapovan Near Deacon Valley
                  </h2>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-500 text-xl font-semibold">★</span>
                    <span className="font-semibold">Wonderful</span>
                    <span className="bg-blue-700 text-white text-sm px-2 py-1 rounded-lg font-bold">9.1</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500">
                  Hotel in River Rafting in Rishikesh, Rishikesh
                </p>

                {/* Description */}
                <p className="text-gray-700 mt-2">
                  Super Hotel O Tapovan Near Deacon Valley features air-conditioned rooms
                  with TV in the River Rafting in Rishikesh district of Rishikesh. Bed was
                  too good. Nice hotel, good experience, a very warm staff...
                  <a href="#" className="text-blue-600"> Show more</a>
                </p>

                {/* Price and Button */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-green-700 text-xl font-semibold">
                    ₹ 1,379.83 <span className="text-sm text-gray-500">per night</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Check availability
                  </button>
                </div>
              </div>
            </div>

            <div className="border m-10 rounded-lg shadow-lg p-4 flex max-w-2xl">
              {/* Left Section - Image */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/hotel.jpg" // Replace this with your image
                  alt="Hotel"
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Right Section - Content */}
              <div className="ml-4 flex-grow">
                {/* Title and Location */}
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-blue-700">
                    Super Hotel O Tapovan Near Deacon Valley
                  </h2>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-500 text-xl font-semibold">★</span>
                    <span className="font-semibold">Wonderful</span>
                    <span className="bg-blue-700 text-white text-sm px-2 py-1 rounded-lg font-bold">9.1</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500">
                  Hotel in River Rafting in Rishikesh, Rishikesh
                </p>

                {/* Description */}
                <p className="text-gray-700 mt-2">
                  Super Hotel O Tapovan Near Deacon Valley features air-conditioned rooms
                  with TV in the River Rafting in Rishikesh district of Rishikesh. Bed was
                  too good. Nice hotel, good experience, a very warm staff...
                  <a href="#" className="text-blue-600"> Show more</a>
                </p>

                {/* Price and Button */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-green-700 text-xl font-semibold">
                    ₹ 1,379.83 <span className="text-sm text-gray-500">per night</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Check availability
                  </button>
                </div>
              </div>
            </div>

            <div className="border m-10 rounded-lg shadow-lg p-4 flex max-w-2xl">
              {/* Left Section - Image */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/hotel.jpg" // Replace this with your image
                  alt="Hotel"
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Right Section - Content */}
              <div className="ml-4 flex-grow">
                {/* Title and Location */}
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-blue-700">
                    Super Hotel O Tapovan Near Deacon Valley
                  </h2>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-500 text-xl font-semibold">★</span>
                    <span className="font-semibold">Wonderful</span>
                    <span className="bg-blue-700 text-white text-sm px-2 py-1 rounded-lg font-bold">9.1</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500">
                  Hotel in River Rafting in Rishikesh, Rishikesh
                </p>

                {/* Description */}
                <p className="text-gray-700 mt-2">
                  Super Hotel O Tapovan Near Deacon Valley features air-conditioned rooms
                  with TV in the River Rafting in Rishikesh district of Rishikesh. Bed was
                  too good. Nice hotel, good experience, a very warm staff...
                  <a href="#" className="text-blue-600"> Show more</a>
                </p>

                {/* Price and Button */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-green-700 text-xl font-semibold">
                    ₹ 1,379.83 <span className="text-sm text-gray-500">per night</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Check availability
                  </button>
                </div>
              </div>
            </div>

            <div className="border m-10 rounded-lg shadow-lg p-4 flex max-w-2xl">
              {/* Left Section - Image */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/hotel.jpg" // Replace this with your image
                  alt="Hotel"
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Right Section - Content */}
              <div className="ml-4 flex-grow">
                {/* Title and Location */}
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-blue-700">
                    Super Hotel O Tapovan Near Deacon Valley
                  </h2>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-500 text-xl font-semibold">★</span>
                    <span className="font-semibold">Wonderful</span>
                    <span className="bg-blue-700 text-white text-sm px-2 py-1 rounded-lg font-bold">9.1</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500">
                  Hotel in River Rafting in Rishikesh, Rishikesh
                </p>

                {/* Description */}
                <p className="text-gray-700 mt-2">
                  Super Hotel O Tapovan Near Deacon Valley features air-conditioned rooms
                  with TV in the River Rafting in Rishikesh district of Rishikesh. Bed was
                  too good. Nice hotel, good experience, a very warm staff...
                  <a href="#" className="text-blue-600"> Show more</a>
                </p>

                {/* Price and Button */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-green-700 text-xl font-semibold">
                    ₹ 1,379.83 <span className="text-sm text-gray-500">per night</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Check availability
                  </button>
                </div>
              </div>
            </div>


          </div>
          <div>
            <div className="flex p-6">
              {/* Sidebar */}
              <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />

              {/* Results */}
              <div className="ml-8 flex-grow">
                <h1 className="text-2xl font-bold mb-4">Filtered Results:</h1>
                {filteredData.length > 0 ? (
                  filteredData.map((hotel) => (
                    <div key={hotel.id} className="border p-4 mb-4 rounded-lg shadow-md">
                      <h2 className="text-lg font-bold">{hotel.name}</h2>
                      <p>Star Rating: {hotel.starRating} stars</p>
                      <p>Review Score: {hotel.reviewScore}</p>
                    </div>
                  ))
                ) : (
                  <p>No results found based on the selected filters.</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>


    </div>
  )
}

export default page
