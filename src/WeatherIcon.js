import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

// Maps the weather code to a specific icon then returns the ReactAnimatedWeather component
export default function WeatherIcon(props){
    const iconMapping  = {
        '01d': 'CLEAR_DAY',
        '01n': 'CLEAR_NIGHT',
        '02d': 'PARTLY_CLOUDY_DAY',
        '02n': 'PARTLY_CLOUDY_NIGHT',
        '03d': 'CLOUDY',
        '03n': 'CLOUDY',
        '04d': 'CLOUDY',
        '04n': 'CLOUDY',
        '09d': 'SHOWERS_DAY',
        '09n': 'SHOWERS_NIGHT',
        '10d': 'RAIN_DAY',
        '10n': 'RAIN_NIGHT',
        '11d': 'THUNDER_SHOWERS_DAY',
        '11n': 'THUNDER_SHOWERS_NIGHT',
        '13d': 'SNOW',
        '13n': 'SNOW',
        '50d': 'FOG',
        '50n': 'FOG',
    };

    return (
        <ReactAnimatedWeather
            icon={iconMapping[props.code]}
            color="#212121"
            size={props.size}
            animate={true}
        />
    );
}