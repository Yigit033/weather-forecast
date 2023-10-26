// import './App.css';
// import WeatherCard from './components/WeatherCard';
// import WeatherList from './components/WeatherList';
// // import WeatherContext from './components/wheathercontext';

// import WeatherContext from './components/wheathercontext';






// function App() {
//   return (
//     <div className="App">
//       <WeatherCard/>
//       <WeatherList/>
//       <WeatherContext/>
      


//     </div>
//   );
// }

// export default App;

// App.js


import './App.css';

// import { WeatherProvider } from './WeatherContext';
import { WeatherProvider } from './components/wheathercontext';

import WeatherList from './components/WeatherList';



function App() {
  return (
    <div className="App">
      <h1>Hava Durumu Uygulaması</h1>
      <WeatherList />
    </div>
  );
}

export default function MainApp() {
  return (
    <WeatherProvider>
      <App />
    </WeatherProvider>
  );
}

