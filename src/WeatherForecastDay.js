import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {

  // Return the maximum temperature rounded to the nearest whole number
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  // Return the minimum temperature rounded to the nearest whole number
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    // Convert the Unix timestamp to JavaScript Date object
    let date = new Date(props.data.dt * 1000);
    // Get the day of the week from 0 (Sunday) to 6 (Saturday)
    let day = date.getDay();

    let days = [
      "Sun",
      "Mon",
      "Tue", 
      "Wed", 
      "Thu", 
      "Fri", 
      "Sat"
    ];

    // Return the corresponding day abbreviation from the 'days' array
    return days[day];
  }

  // Display the day of the week, render the WeatherIcon component with the weather icon code and size, and display min/max temperatures
  return (
    <div className="p-3">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}