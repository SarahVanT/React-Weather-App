import React, { useState } from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("Celsius");

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("Fahrenheit");
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit("Celsius")
    }

    function fahrenheitTemperature(){
        return  (props.celsius * 9)/5 + 32
    }

    if (unit === "Celsius"){
        return(
        <span className="WeatherTemperature">
            <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="unit">°C | 
            <a href="/" onClick={showFahrenheit}>°F</a>
            </span>
        </span>
        );
    } else{
        
        return(
        <span className="WeatherTemperature">
            <span className="temperature">{Math.round(fahrenheitTemperature())}</span>
            <span className="unit"><a href="/" onClick={showCelsius}>°C</a> | 
            {""}°F
            </span>
        </span>
        );
    }
    
}