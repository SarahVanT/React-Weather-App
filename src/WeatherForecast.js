import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  // State variable to track if weather data is loaded
  let [loaded, setLoaded] = useState(false);
  // State variable to store the weather forecast data
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    // Reset loaded state when props.coordinates change
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    // Accessing and setting the weather forecast daily data in state
    setForecast(response.data.daily);
    // Set loaded state to true to indicate data has been loaded
    setLoaded(true);
  }

  // If loaded is true, render first 5 days 
  if (loaded) {
    return (
      <div className="WeatherForecast row justify-content-between">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col-sm" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            // If index is greater than 5, return null (no rendering)
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "0f8bc384a7c31b717a18cfe38a95ae06";
    let longitute = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitute}&appid=${apiKey}&units=imperial`;
    // Fetch weather data from the API using Axios
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}