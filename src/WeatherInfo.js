import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
// import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";



export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <div className="row">
            <div className="col-12 col-sm-6 text-sm-left text-center">
                <h1>{props.data.city} - {props.data.country}</h1>
                <ul>
                    {/* Calling component, sending date from timestamp */}
                    <li>
                        <FormattedDate date={props.data.date}/>,{" "}{props.data.description}
                    </li>
                    <li>
                        Humidity: <strong>{props.data.humidity}%</strong>, Wind:{" "}
                        <strong>{props.data.wind} mph</strong>
                    </li>
                </ul>
            </div>
            <div className="col-12 col-sm-6 text-center">
                <div className="temperature-container d-flex justify-content-center align-items-center">
                    <WeatherIcon code={props.data.icon} size={52}/>
                    <div>
                        <span className="temperature">
                            {Math.round(props.data.temperature)}
                        </span>
                        <span className="unit">°F
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    );
}