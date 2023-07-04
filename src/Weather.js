import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props){
    // preventing constant loop API call
    // const[ready, setReady] = useState(false);
    const[weatherData, setWeatherData] = useState({ready: false});

    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            city: response.data.name,
            date: new Date(response.data.dt*1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            // description: response.data.condition.description,
            // wind:response.data.wind.speed,
            // icon: response.data.condition.icon_url,
            // city: response.data.city,
            // country: response.data.country,
            // date: response.data.

        })
        
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input 
                            type="search" 
                            placeholder="Enter a city"
                            className="form-control"
                            autoFocus="on"
                            autoComplete="off"
                        />
                        </div>
                        <div className="col-3">
                            <input
                            type="submit"
                            value="Search"
                            className="btn btn-primary w-100"
                            />
                        </div>
                    </div>
                </form>
                <h1>Dayton</h1>
                <ul>
                    {/* Calling component, sending date from timestamp */}
                    <li><FormattedDate date={weatherData.date}/></li>
                    <li className="text-capitalized">{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix">
                            <div className="float-left">
                                <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
                                alt="Partly cloudy"
                                />
                                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                                <span className="unit">°C</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Precipitation: 18%</li>
                            <li>Wind: {weatherData.wind}mph</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else{
        const apiKey = `6d68aadfacdd4f5163bc273049a0cf2d`;
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}