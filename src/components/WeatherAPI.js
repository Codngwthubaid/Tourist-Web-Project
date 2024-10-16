"use client"

// components/Weather.js
import { useState, useEffect } from 'react';
import moment from 'moment';

const Weather = () => {
    const [city, setCity] = useState('Pune');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const apiKey = '9c28fde19cmshe082526fa9ef8a5p1c7562jsnefb94a5617e2';

    useEffect(() => {
        fetchWeather(city);
    }, [city]);

    const fetchWeather = async (cityName) => {
        const url = "https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric";
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error('City not found');
            const data = await res.json();
            setWeatherData(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleCityChange = (e) => setCity(e.target.value);

    return (
        <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?landscape')" }}>
            <div className="bg-black bg-opacity-80 rounded-lg p-6 shadow-lg max-w-md w-full text-center">
                <h1 className="text-white text-3xl mb-4">Weather App</h1>
                <input
                    type="text"
                    className="p-2 rounded-lg w-3/4 mb-4 text-black"
                    placeholder="Enter city name"
                    value={city}
                    onChange={handleCityChange}
                />
                <button
                    className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
                    onClick={() => fetchWeather(city)}
                >
                    Get Weather
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
                {weatherData && (
                    <div className="mt-4">
                        <h3 className="text-white">{weatherData.name}</h3>
                        <p className="text-white">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
                        <p className="text-white text-xl">{weatherData.main.temp}°C</p>
                        <p className="text-white">{weatherData.weather[0].description}</p>
                        <p className="text-white">Wind Speed: {weatherData.wind.speed} m/s</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Weather;