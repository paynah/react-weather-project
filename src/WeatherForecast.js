import React from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    return (
        <div className="row" id="forecast">
            <WeatherForecastDay dayData={props.weatherData.forecast[0]}/>
            <WeatherForecastDay dayData={props.weatherData.forecast[1]}/>
            <WeatherForecastDay dayData={props.weatherData.forecast[2]}/>
            <WeatherForecastDay dayData={props.weatherData.forecast[3]}/>
            <WeatherForecastDay dayData={props.weatherData.forecast[4]}/>
        </div>
    );
}