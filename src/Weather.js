import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import countryList from 'country-list';
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props){
    // preventing constant loop API call
    const[weatherData, setWeatherData] = useState({ready: false});
    const[city, setCity] = useState(props.defaultCity);
    

    function handleResponse(response){
        console.log(response.data);
        const countryName = countryList.getName(response.data.sys.country);
         // Split the description of the weather into separate words
        let descriptionArray = response.data.weather[0].description.split(" ");
        let capitalizedDescription = "";
         // Loop through each word in the descriptionArray
         // Capitalize the first letter of the word and add the rest of the word to it
        descriptionArray.forEach(function (word) {
            capitalizedDescription += word.charAt(0).toUpperCase() + word.slice(1) + " ";
        });

        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            city: response.data.name,
            country: countryName,
            date: new Date(response.data.dt*1000),
            description: (capitalizedDescription),
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            coordinates: response.data.coord,
            // latitude: response.data.coord.lat,
            // longitude: response.data.coord.lon,
        })
        
    }

    function search (){
        const apiKey = `6d68aadfacdd4f5163bc273049a0cf2d`;
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    // Function to handle form submission
    function handleSubmit(event){
        // Prevent default form submission
        event.preventDefault();
        search();

    }

    function handleInputChange(event){
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input 
                            type="search" 
                            placeholder="Enter a city"
                            className="form-control"
                            autoFocus="on"
                            autoComplete="off"
                            onChange={handleInputChange}
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
                <WeatherInfo data={weatherData}/>
                <WeatherForecast coordinates={weatherData.coordinates}/>
            </div>
        );
    } else{
        search();
        return "Loading...";
    }
}