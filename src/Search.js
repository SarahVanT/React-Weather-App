import React, { useState } from "react";
import axios from "axios";

export default function Search(){
    const [city, setCity] = useState("");
    const [forecast, setForecast] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function displayWeather(response){
        console.log(response.data); 
        // split into an array of words descriptionArray = ["scattered", "clouds"];
        let descriptionArray = response.data.weather[0].description.split(" ");
        let capitalizedDescription = "";
        // loop through each element of descriptionArray
        // Take 1st letter of word & capitalize it, then slice rest of word to combine together with
        // + " " is a space
        descriptionArray.forEach(function (word) {
        capitalizedDescription +=
            word.charAt(0).toUpperCase() + word.slice(1) + " ";
        });

        setForecast({
            name: response.data.name,
            country: response.data.sys.country,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            description: (capitalizedDescription),
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=894a2e7aa7f46eeca5d8778f6faa5a5b&units=metric`;
        axios.get(url).then(displayWeather);
        setSubmitted(true);
    }

    function updateCity(event){
        setCity(event.target.value);
    }


    let form = (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="row">
                <div className="col-6">
                     {/* updateCity function is called when user types in city*/}
                    <input 
                        type="search" 
                        placeholder="Type a city" 
                        autoComplete="off" 
                        onChange={updateCity}
                        className="form-control"
                    />
                </div>
                <div className="col-3">
                    <input 
                        type="submit" 
                        value="Search" 
                        className="btn btn-primary form-control"
                    />
                </div>
                <div className="col-3">
                    <input 
                        type="button" 
                        value="Current" 
                        className="btn btn-primary form-control"
                    />
                </div>
            </div>
        </form>
    )

    // let content = (
        
    // )

    if (submitted) {
        return(
            <div>
                {form}
                <ul className="WeatherResults">
                    <li>
                        {forecast.name}
                    </li>
                    <li>
                        {forecast.country}
                    </li>
                    <li>
                        {Math.round(forecast.temperature)}°C
                    </li>
                    <li className="ChangeMetric">
                        <button type="button" className="btn-sm me-2" aria-pressed="true">°C</button>
                        <button type="button" className="btn-sm" aria-pressed="true">°F</button>
                    </li>
                    <li>
                        <strong>{forecast.description}</strong>
                    </li>
                    <li>
                        Humidity: <strong>{forecast.humidity}%</strong>
                    </li>
                    <li>
                        Wind: <strong>{forecast.wind} km/hr</strong>
                    </li>
                    <li>
                        <img src={forecast.iconUrl} id="icon" alt="Weather Icon" />  
                    </li>
                </ul>
            </div>
        )
    } else{
        return (
        <div>{form}</div>
        )
    }
}