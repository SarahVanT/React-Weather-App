import './App.css';

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "http://openweathermap.org/img/wn/50d@2x.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="Weather">
      <form id="search-form">
        <div className="search-city-input">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control search-input"
            id="city-input"
            autoComplete="off"
          />
        </div>
        <div className="search-city-btn">
          <input
            type="submit"
            className="btn btn-primary w-100"
            value="Search"
          />
        </div>
      </form>
      <div className="name-current-city">
        <h1 id="city">{weatherData.city} </h1>
      </div>
      <div className="current-weather">
        <img
          src="http://openweathermap.org/img/wn/50d@2x.png"
          alt="weather icon"
          id="icon"
          width="100"
        />
        <p id="temperature">{weatherData.temperature}</p>
        <div className="units">
          <sup>°C</sup>
        </div>
      </div>
      <ul className="current-weather-info-list">
        <li>
          Last update: <span id="date">{weatherData.date}</span>
        </li>
        <li id="description">Clouds</li>
        <li>
          Humidity: <span id="humidity">{weatherData.humidity}</span>%
        </li>
        <li>
          Wind: <span id="wind">{weatherData.wind}</span> km/h
        </li>
      </ul>
      <small>
        <a href="https://github.com/seheichenko-anna/weather-react.git">
          Open-source code
        </a>
      </small>
    </div>
  );
}
