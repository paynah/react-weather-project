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
    let weatherIcon = getWeatherIcon(props.weatherData.icon);

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

function getWeatherIcon(iconName) {
    let weatherIcon = zero1D;

    switch (iconName) {
        case "01n":
            weatherIcon = zero1N;
            break;
        case "02d":
            weatherIcon = zero2D;
            break;
        case "02n":
            weatherIcon = zero2N;
            break;
        case "03d":
            weatherIcon = zero3D;
            break;
        case "03n":
            weatherIcon = zero3N;
            break;
        case "04d":
            weatherIcon = zero4D;
            break;
        case "04n":
            weatherIcon = zero4N;
            break;
        case "09d":
            weatherIcon = zero9D;
            break;
        case "09n":
            weatherIcon = zero9N;
            break;
        case "10d":
            weatherIcon = tenD;
            break;
        case "10n":
            weatherIcon = tenN;
            break;
        case "11d":
            weatherIcon = elevenD;
            break;
        case "11n":
            weatherIcon = elevenN;
            break;
        case "13d":
            weatherIcon = thirteenD;
            break;
        case "13n":
            weatherIcon = thirteenN;
            break;
        case "50d":
            weatherIcon = fiftyD;
            break;
        case "50n":
            weatherIcon = fiftyN;
            break;
        default:
            weatherIcon = zero1D;
    }

    return weatherIcon;
}