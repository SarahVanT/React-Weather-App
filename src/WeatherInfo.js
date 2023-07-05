import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
            <ul>
                {/* Calling component, sending date from timestamp */}
                <li><FormattedDate date={props.data.date}/></li>
                <li className="text-capitalized">{props.data.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <div className="float-left">
                            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
                            alt="Partly cloudy"
                            />
                            <span className="temperature">{Math.round(props.data.temperature)}</span>
                            <span className="unit">°C</span>
                        </div>
                    </div>
                    
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 18%</li>
                        <li>Wind: {props.data.wind}mph</li>
                        <li>{props.data.country}</li> 
                    </ul>
                </div>
            </div>
      </div>  
    );
}