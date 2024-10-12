# Tourist Web Project

A responsive web application for tourists to explore destinations, plan itineraries, and share experiences. Features include interactive maps, user reviews, local recommendations, and personalized trip planning tools. Built with modern web technologies to provide an engaging and user-friendly interface for travelers worldwide.

## Features

- Interactive maps for destination exploration
- User reviews and ratings for attractions, hotels, and restaurants
- Local recommendations based on user preferences
- Personalized trip planning and itinerary creation
- User authentication and profile management
- Responsive design for seamless use across devices

## Technologies Used

- Frontend:
  - React.js
  - TailwindCSS
- Backend:
  - Express.js
  - MongoDB
- Additional Tools and Libraries:
  - Node.js
  - Mongoose (ODM for MongoDB)
  - Axios (HTTP client)
  - React Router (for routing)
  - JSON Web Tokens (for authentication)
  - Mapbox GL JS (for interactive maps)

## NPM Packages

- `react`: Core library for building the user interface
- `react-dom`: React package for DOM rendering
- `express`: Web application framework for Node.js
- `mongodb`: Official MongoDB driver for Node.js
- `mongoose`: MongoDB object modeling tool
- `tailwindcss`: Utility-first CSS framework
- `axios`: Promise-based HTTP client
- `react-router-dom`: Routing library for React
- `jsonwebtoken`: Implementation of JSON Web Tokens
- `bcryptjs`: Library for hashing passwords
- `mapbox-gl`: JavaScript library for interactive maps
- `dotenv`: Loads environment variables from a .env file

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/tourist-web-project.git
   ```

2. Navigate to the project directory:
   ```
   cd tourist-web-project
   ```

3. Install dependencies for both frontend and backend:
   ```
   npm install
   cd client && npm install
   ```

4. Create a `.env` file in the root directory and add necessary environment variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   MAPBOX_ACCESS_TOKEN=your_mapbox_access_token
   ```

## Usage

1. Start the backend server:
   ```
   npm run server
   ```

2. In a separate terminal, start the frontend development server:
   ```
   cd client && npm start
   ```

3. Open your browser and visit `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.