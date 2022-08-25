import React from "react";
import "./WeatherDetails.css";
import humidityIcon from "./images/humidity.png";
import windIcon from "./images/wind.png";
import sunriseIcon from "./images/sunrise.png";
import sunsetIcon from "./images/sunset.png";

export default function WeatherDetails(props) {
    return (
        <div className="row">
            <div className="col-2 mb-4 weatherDetail" title="Sunrise">
                <img className="weather-detail-icon" src={sunriseIcon} alt="sunrise"></img>
                <span className="weatherDetailValue" id="sunriseTime">{props.weatherData.sunrise}</span>
            </div>
            <div className="col-10 mb-4 weatherDetail" title="Humidity">
                <img className="weather-detail-icon" src={humidityIcon} alt="humidity"></img>
                <span className="weatherDetailValue" id="humidity">{props.weatherData.humidity}%</span>
            </div>
            <div className="col-2 mb-4 weatherDetail" title="Sunset">
                <img className="weather-detail-icon" src={sunsetIcon} alt="sunset"></img>
                <span className="weatherDetailValue" id="sunsetTime">{props.weatherData.sunset}</span>
            </div>
            <div className="col-10 mb-4 weatherDetail" title="Wind speed">
                <img className="weather-detail-icon" src={windIcon} alt="wind speed"></img>
                <span className="weatherDetailValue" id="windSpeed">{props.weatherData.windSpeed} mph</span>
            </div>
        </div>
    );
}