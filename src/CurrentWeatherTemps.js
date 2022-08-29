import React from "react";
import "./CurrentWeatherTemps.css";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeatherTemps(props) {
    let temp = props.weatherData.temperature;
    let tempMax = props.weatherData.tempMax;
    let tempMin = props.weatherData.tempMin;
    
    if (props.tempUnit === "celsius") {
        temp = Math.round((temp - 32) * (5/9));
        tempMax = Math.round((tempMax - 32) * (5/9));
        tempMin = Math.round((tempMin - 32) * (5/9));
    } 
    return (
        <div className="row currentWeatherTemps">
            <div className="col-md-auto">
            <WeatherIcon iconName={props.weatherData.icon} iconSize="large" />
            </div>
            <div className="col temps">
            <div className="row">
                <div className="col-12" id="currentTemp">{temp}°</div>
                <div className="tempDisplay col flex-fill" id="currentMinMaxTemp">{tempMax}° / {tempMin}°</div>
            </div>
            </div>
        </div>
    );
}