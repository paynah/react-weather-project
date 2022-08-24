import React from "react";
import "./CurrentWeather.css";
import FormattedDate from "./FormattedDate";

export default function CurrentWeather(props) {
    return (
        <div className="currentWeather">
            <p className="mb-0" id="cityName">{props.weatherData.city}</p>
            <p id="weather-description">{props.weatherData.description}</p>
            {/* <p className="mb-2" id="current-date-time">date</p> */}
            <FormattedDate dateObj={props.weatherData.date} />
            <hr className="mt-0" />
        </div>
    );
}