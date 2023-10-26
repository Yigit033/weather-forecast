// import React from 'react'

// const WeatherList = () => {
//   return (
//     <div>WeatherList</div>
//   )
// }

// export default WeatherList



// WeatherList.js

import React from 'react';
// import { useWeather } from './WeatherContext';
import { useWeather } from './wheathercontext';
import WeatherCard from './WeatherCard';


function WeatherList() {
  const { weatherData } = useWeather();

  return (
    <div className="weather-list">
      {weatherData.map((item, index) => (
        <WeatherCard key={index} data={item} />
      ))}
    </div>
  );
}

export default WeatherList;
