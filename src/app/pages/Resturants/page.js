import Image from 'next/image';

const Restaurants = () => {
  const restaurants = [
    {
      id: 1,
      title: 'Dehradun Restaurants',
      image: '/images/dehradun.jpg',
    },
    {
      id: 2,
      title: 'Rishikesh Restaurants',
      image: '/images/rishikesh.jpg',
    },
    {
      id: 3,
      title: 'Haldwani Restaurants',
      image: '/images/haldwani.jpg',
    },
    {
      id: 4,
      title: 'Mussoorie Restaurants',
      image: '/images/mussoorie.jpg',
    },
    {
      id: 5,
      title: 'Haridwar Restaurants',
      image: '/images/haridwar.jpg',
    },
    {
      id: 6,
      title: 'Nainital Restaurants',
      image: '/images/nainital.jpg',
    },
    {
      id: 7,
      title: 'Jim Corbett National Park Restaurants',
      image: '/images/jim_corbett.jpg',
    },
    {
      id: 8,
      title: 'Roorkee Restaurants',
      image: '/images/roorkee.jpg',
    },
    {
      id: 9,
      title: 'Almora Restaurants',
      image: '/images/almora.jpg',
    },
    {
      id: 10,
      title: 'Ramnagar Restaurants',
      image: '/images/ramnagar.jpg',
    },
    {
      id: 11,
      title: 'Rudrapur Restaurants',
      image: '/images/rudrapur.jpg',
    },
    {
      id: 12,
      title: 'Bhimtal Restaurants',
      image: '/images/bhimtal.jpg',
    },
  ];

  return (
    <div className="container mx-auto p-4">
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

      <h1 className="my-10 text-3xl font-bold text-center mb-8">Restaurants in Uttarakhand</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="bg-white shadow-md rounded p-4">
            <Image src={restaurant.image} alt={restaurant.title} width={192} height={150} className="w-full h-48 object-cover rounded-t" />
            <h2 className="text-lg font-bold">{restaurant.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;