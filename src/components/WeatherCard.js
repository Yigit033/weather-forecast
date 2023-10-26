// import React from 'react'

// const WeatherCard = () => {
//   return (
//     <div>
//       WeatherCard
//     </div>
//   )
// }

// export default WeatherCard;

// WeatherCard.js

import React from 'react';

function WeatherCard({ data }) {
  const { dt_txt, main, weather } = data;

  return (
    <div className="weather-card">
      <h3>{new Date(dt_txt).toDateString()}</h3>
      <img src={`https://openweathermap.org/img/w/${weather[0].icon}.png`} alt={weather[0].description} />
      <p>Max: {main.temp_max}°C</p>
      <p>Min: {main.temp_min}°C</p>
    </div>
  );
}

export default WeatherCard;
