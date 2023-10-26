// // WeatherContext.js
// import React, { createContext, useState, useContext } from 'react';

// const WeatherContext = () => {
//     const [weather , setWeather] = useState("");
//     return (
//         <div>
//             WheatherContext
//         </div>
//     )
// };


// async function getweather() {
//     const Weather = await (
//         await fetch("http://api.openweathermap.org/geo/1.0/reverse?lat=51.5098&lon=-0.1180&limit=5&appid=c2d88f30bd10482a234574cd36ebc7f6        ")
//     ).json();
//     console.log(Weather);
// }

// // console.log(getweather());
// export default WeatherContext;




// WeatherContext.js

import { createContext, useContext, useState, useEffect } from 'react';

const WeatherContext = createContext();

export function useWeather() {
  return useContext(WeatherContext);
};

export function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState([]);
  const [selectedCity, setSelectedCity] = useState('Istanbul');

  useEffect(() => {
    // Hava durumu verilerini API'den çekmek için bir fonksiyon
    async function fetchWeatherData(city) {
      try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=51.5098&lon=-0.1180&limit=5&appid=4ed4194d3e9331a52c2061ea58196de0        `);
        const data = await response.json();
        setWeatherData(data.list);
      } catch (error) {
        console.error('Hava durumu verileri alınamadı:', error);
      }
    }

    fetchWeatherData(selectedCity);
  }, [selectedCity]);

  return (
    <WeatherContext.Provider value={{ weatherData, selectedCity, setSelectedCity }}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherContext;



