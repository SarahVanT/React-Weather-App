import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(){
    // preventing constant loop API call
    const[ready, setReady] = useState(false);
    const[temperature, setTemperature] = useState(null);

    function handleResponse(response){
        console.log(response.data);
        setTemperature(response.data.temperature.current);
        setReady(true);
    }

    if (ready) {
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
                    <li>Monday 1:00 PM</li>
                    <li>Mostly cloudy</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix">
                            <div className="float-left">
                                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
                                alt="Partly cloudy"
                                />
                                <span className="temperature">{Math.round(temperature)}</span>
                                <span className="unit">°C</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Precipitation: 15%</li>
                            <li>Humidity: 72%</li>
                            <li>Wind: 6 mph</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else{
        const apiKey = `tc77416a9a6oe00ff484244bdff2d3b1`;
        let city = `Dayton`;
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}