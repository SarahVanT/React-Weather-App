import React from "react";

export default function FormattedDate(props){
    // This function adds a leading zero to a number if it is less than 10
    function addZero(number){
        if (number < 10) {
            return `0${number}`;
        } else {
            return number;
        }
    }

    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = weekday[props.date.getDay()];
    let hours = addZero(props.date.getHours());
    let minutes = addZero(props.date.getMinutes());
    

    return (
    <span>
        {day} {hours}:{minutes}
    </span>
    );
}