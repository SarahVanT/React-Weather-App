import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
// import countryList from "country-list";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
    // preventing constant loop API call
    const[weatherData, setWeatherData] = useState({ready: false});
    const[city, setCity] = useState(props.defaultCity);
    // Error handling
    const[error, setError] = useState(null);
    const [formError, setFormError] = useState(false);

    

    function handleResponse(response) {
        console.log(response.data);
        // const countryName = countryList.getName(response.data.sys.country);
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
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            city: response.data.name,
            country: response.data.sys.country,
            date: new Date(response.data.dt*1000),
            description: (capitalizedDescription),
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
        })
        
    }

    function handleError(error) {
        setError(`Please enter a valid city name.`);
        setFormError(true);
        console.error(error);
    }

    // Function to handle form submission
    function handleSubmit(event){
        // Prevent default form submission
        event.preventDefault();
        // Calling search function
        search();

    }

    function search (){
        const apiKey = `6d68aadfacdd4f5163bc273049a0cf2d`;
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;


        axios
            .get(apiUrl)
            .then(handleResponse)
            .catch(handleError);
    }


    function handleInputChange(event){
        setCity(event.target.value);
        // Reset the error state to null
        setError(null); 
        // Reset the formError state to false
        setFormError(false);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-sm-9 mb-3 mb-sm-0">
                            <input 
                            type="search" 
                            placeholder="Enter a city"
                            //  Add class name "error-input" if formError is true, returns empty str if formError is false
                            className={`form-control search-input ${formError ? "error-input" : ""}`} 
                            autoFocus="on"
                            autoComplete="off"
                            onChange={handleInputChange}
                        />
                        </div>
                        <div className="col-sm-3">
                            <input
                            type="submit"
                            value="Search"
                            className="btn btn-primary w-100"
                            />
                        </div>
                    </div>
                {/* Display error message */}
                {error && (
                    <div className="error">
                        <i className="fas fa-exclamation-circle"></i> {error}
                    </div>
                )}
                </form>
                
                <WeatherInfo data={weatherData}/>
                <WeatherForecast coordinates={weatherData.coordinates}/>
                <footer>
                    This project was created by <a href='https://sarahvantilburg.netlify.app/' target="_blank" rel="noreferrer"> Sarah VanTilburg</a> and is <a
                    href="https://github.com/SarahVanT/React-Weather-App"
                    target="_blank"
                    rel="noreferrer"
                    >open sourced on GitHub</a>
                    {" "}and{" "}<a
                    href="https://superlative-lebkuchen-32b205.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    >hosted on Netlify</a>
                </footer>
            </div>  
        );
    } else{
        search();
        return "Loading...";
    }
}