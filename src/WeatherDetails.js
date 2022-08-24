import React from "react";
import "./WeatherDetails.css";
import zero1D from "./images/01d.png";
import zero1N from "./images/01n.png";
import zero2D from "./images/02d.png";
import zero2N from "./images/02n.png";
import zero3D from "./images/03d.png";
import zero3N from "./images/03n.png";
import zero4D from "./images/04d.png";
import zero4N from "./images/04n.png";
import zero9D from "./images/09d.png";
import zero9N from "./images/09n.png";
import tenD from "./images/10d.png";
import tenN from "./images/10n.png";
import elevenD from "./images/11d.png";
import elevenN from "./images/11n.png";
import thirteenD from "./images/13d.png";
import thirteenN from "./images/13n.png";
import fiftyD from "./images/50d.png";
import fiftyN from "./images/50n.png";

export default function WeatherDetails(props) {
    const weatherIconMapping = {
        "01d": zero1D,
        "01n": zero1N,
        "02d": zero2D,
        "02n": zero2N,
        "03d": zero3D,
        "03n": zero3N,
        "04d": zero4D,
        "04n": zero4N,
        "09d": zero9D,
        "09n": zero9N,
        "10d": tenD,
        "10n": tenN,
        "11d": elevenD,
        "11n": elevenN,
        "13d": thirteenD,
        "13n": thirteenN,
        "50d": fiftyD,
        "50n": fiftyN
    };
    let weatherIcon = weatherIconMapping[props.weatherData.icon];

    return (
        <div className="row weatherDetails">
            <div className="col-md-auto">
            <img src={weatherIcon} alt="" id="big-weather-icon" />
            </div>
            <div className="col temps">
            <div className="row">
                <div className="col-12" id="currentTemp">{props.weatherData.temperature}°</div>
                <div className="tempDisplay col flex-fill" id="currentMinMaxTemp">{props.weatherData.tempMax}° / {props.weatherData.tempMin}°</div>
            </div>
            </div>
        </div>
    );
}