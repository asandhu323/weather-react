import { date } from "language-tags";
import { useState } from 'react';

const api = {
  key: "c0a04fdf33fbb1b29501d185a09efd82",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main == 'undefined') ? 'app' 
                    : ((weather.weather[0].main == 'Rain') ? 'app rain' 
                    : ((weather.weather[0].main == 'Snow') ? 'app snow'
                    : ((weather.main.temp <= 0) ? 'app cold'
                    : ((weather.main.temp > 0 && weather.main.temp < 15) ? 'app'
                    : ((weather.main.temp >= 15 && weather.main.temp < 30) ? 'app warm' : 'app hot')))))}>
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Enter a city..." onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}??C</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>) : ('')}
      </main>
    </div>
  );
}

export default App;
