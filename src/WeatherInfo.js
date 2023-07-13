import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
// import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";



export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <div className="row">
            <div className="col-6">
                <h1>{props.data.city}</h1>
                {/* <p>{props.data.country}</p> */}
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
            <div className="col-lg-6 col-md-6 col-sm-8">
                <div className="temperature-container d-flex justify-content-end">
                    <WeatherIcon code={props.data.icon} size={52}/>
                    <div>
                        <span className="temperature">
                            {Math.round(props.data.temperature)}
                        </span>
                        <span className="unit">°F</span>
                    </div>
                </div>
            </div>
        </div>
         
            
            {/* <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <div className="float-left">
                            <WeatherIcon code={props.data.icon} size={52}/>
                            <WeatherTemperature celsius={props.data.temperature}/>
                            
                        </div>
                    </div>
                    
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 18%</li>
                        <li>Wind: {props.data.wind}mph</li>
                    </ul>
                </div>
            </div> */}
    </div>  
    );
}