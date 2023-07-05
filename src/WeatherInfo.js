import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";



export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <p>{props.data.country}</p>
            <ul>
                {/* Calling component, sending date from timestamp */}
                <li><FormattedDate date={props.data.date}/></li>
                <li className="text-capitalized">{props.data.description}</li>
            </ul>
            <div className="row mt-3">
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
            </div>
      </div>  
    );
}